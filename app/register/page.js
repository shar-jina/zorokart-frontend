"use client";

import { useRef, useState, useEffect } from "react";
import Script from "next/script";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Register() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        accountType: "",
        video: null,
        paymentDone: false,
    });
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        phone: "",
    });

    const fileInputRef = useRef(null);
    const upiId = "zorokartindia2@fbl";
    const upiName = "Akshayavahini";
    const amount = 999;

    useEffect(() => {
        setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }, []);

    const handleChange = (e) => {
        const { name, type, value, checked, files } = e.target;

        if (name === "phone") {
            const numericValue = value.replace(/\D/g, "").slice(0, 10);
            setFormData({ ...formData, [name]: numericValue });
            if (numericValue.length > 0 && numericValue.length < 10) {
                setErrors((prev) => ({ ...prev, phone: "Phone number must be exactly 10 digits." }));
            } else {
                setErrors((prev) => ({ ...prev, phone: "" }));
            }
            return;
        }

        if (name === "email") {
            setFormData({ ...formData, [name]: value });
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length > 0 && !emailRegex.test(value)) {
                setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
            } else {
                setErrors((prev) => ({ ...prev, email: "" }));
            }
            return;
        }

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        });
    };

    const nextStep = () => {
        if (step === 1) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.accountType) {
                alert("Please fill in all required fields.");
                return;
            }
            if (!emailRegex.test(formData.email) || formData.phone.length !== 10) {
                alert("Please correct the errors in the form.");
                return;
            }
        }
        setStep(step + 1);
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo(0, 0);
    };

    const uploadVideoToCloudinary = async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ecommerce_videos");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/daj8zz425/video/upload",
            {
                method: "POST",
                body: data,
            }
        );

        if (!res.ok) throw new Error("Video upload failed");
        return res.json();
    };

    const handleRazorpayPayment = async () => {
        setLoading(true);
        try {
            // 1. Create Order on Backend
            const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/payment/create-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: amount, currency: "INR" }),
            });

            if (!orderRes.ok) throw new Error("Could not create Razorpay order");
            const orderData = await orderRes.json();

            // 2. Open Razorpay Checkaround
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Zorokart",
                description: "Registration Payment",
                order_id: orderData.id,
                handler: async function (response) {
                    await verifyAndRegister(response);
                },
                prefill: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: { color: "#4CAF50" },
            };

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response) {
                alert("Payment failed: " + response.error.description);
                setLoading(false);
            });
            rzp.open();
        } catch (err) {
            console.error(err);
            alert(err.message || "Something went wrong with the payment");
            setLoading(false);
        }
    };

    const verifyAndRegister = async (paymentResponse) => {
        try {
            setLoading(true);
            let videoUrl = "";
            if (formData.video) {
                console.log("Uploading video to Cloudinary...");
                const uploadResult = await uploadVideoToCloudinary(formData.video);
                videoUrl = uploadResult.secure_url;
                console.log("Video uploaded successfully:", videoUrl);
            }

            const { video, ...otherData } = formData;
            const payload = {
                ...otherData,
                videoUrl,
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
            };

            const registerUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register-with-payment`;
            console.log("Submitting unified registration at URL:", registerUrl);

            const response = await fetch(registerUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const responseText = await response.text();
                let errorMessage = `Status ${response.status}`;
                try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    errorMessage = `${errorMessage}: ${responseText.substring(0, 100)}`;
                }
                console.error("Registration error details:", { status: response.status, body: responseText });
                throw new Error(errorMessage);
            }

            const result = await response.json();
            console.log("Registration successful:", result);
            setStep(3); // Show confirmation
        } catch (err) {
            console.error("Full error in verifyAndRegister:", err);
            alert(`Registration failed: ${err.message}. If payment was successful, please contact support with your payment ID.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="register-container">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <header className="register-header">
                <div className="check-in-title">Check in</div>
                <div className="stepper">
                    <div className={`step-item ${step >= 1 ? "active" : ""}`}>
                        <div className="step-number">1</div>
                        <div>Details</div>
                    </div>
                    <div className={`step-line ${step >= 2 ? "filled" : ""}`}></div>
                    <div className={`step-item ${step >= 2 ? "active" : ""}`}>
                        <div className="step-number">2</div>
                        <div>Payment</div>
                    </div>
                    <div className={`step-line ${step >= 3 ? "filled" : ""}`}></div>
                    <div className={`step-item ${step >= 3 ? "active" : ""}`}>
                        <div className="step-number">3</div>
                        <div>Confirmation</div>
                    </div>
                </div>
            </header>

            <div className="registration-card">
                {step === 1 && (
                    <Step1
                        formData={formData}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        errors={errors}
                        loading={loading}
                        fileInputRef={fileInputRef}
                    />
                )}
                {step === 2 && (
                    <Step2
                        formData={formData}
                        prevStep={prevStep}
                        amount={amount}
                        handleRazorpayPayment={handleRazorpayPayment}
                        loading={loading}
                        isMobile={isMobile}
                        upiId={upiId}
                    />
                )}
                {step === 3 && (
                    <Step3 formData={formData} />
                )}
            </div>
        </main>
    );
}

function Step1({ formData, handleChange, nextStep, errors, loading, fileInputRef }) {
    return (
        <div>
            <h2>Create Account</h2>
            <p className="subtitle">Join the Akshayavahini community and start your journey with us.</p>

            <div className="form-grid">
                <div className="form-group full-width">
                    <label>Register as :</label>
                    <select name="accountType" value={formData.accountType} onChange={handleChange} required>
                        <option value="" disabled>Select Account Type</option>
                        <option value="agent">Agent</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>First Name :</label>
                    <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} required placeholder="First Name" />
                </div>

                <div className="form-group">
                    <label>Second Name :</label>
                    <input name="lastName" type="text" value={formData.lastName} onChange={handleChange} required placeholder="Last Name" />
                </div>

                <div className="form-group">
                    <label>Phone Number :</label>
                    <div className="phone-input-wrapper">
                        <span className="country-code">+91</span>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} maxLength="10" placeholder="10-digit number" required />
                    </div>
                    {errors.phone && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.phone}</p>}
                </div>

                <div className="form-group">
                    <label>Email Address :</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required />
                    {errors.email && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.email}</p>}
                </div>
            </div>

            <div className="video-upload-area" onClick={() => fileInputRef.current.click()}>
                <input type="file" name="video" accept="video/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleChange} />
                <div className="upload-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                </div>
                <div className="upload-text">
                    {formData.video ? formData.video.name : <>Drag & Drop Video or <span>Click to upload</span></>}
                </div>
                <p className="upload-hint">Supports MP4, MOV (Max. 50MB)</p>
            </div>

            <button className="submit-btn" onClick={nextStep} disabled={loading}>
                Submit
            </button>
        </div>
    );
}

function Step2({ formData, prevStep, amount, handleRazorpayPayment, loading, isMobile, upiId }) {
    const [selectedMethod, setSelectedMethod] = useState("razorpay");
    const upiLink = `upi://pay?pa=${upiId}&pn=Akshayavahini&am=${amount}&cu=INR&tn=Zorokart Registration`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiLink)}`;

    const copyUpiId = () => {
        navigator.clipboard.writeText(upiId);
        alert("UPI ID copied to clipboard");
    };

    return (
        <div>
            <h2>Complete Payment</h2>
            <p className="subtitle">Choose payment method</p>

            <div className="payment-options">
                {/* Debit Card */}
                {/* <div className={`payment-method ${selectedMethod === "card" ? "selected" : ""}`} onClick={() => setSelectedMethod("card")}>
                    <div className="payment-method-header">
                        <input type="radio" checked={selectedMethod === "card"} readOnly />
                        <span>Debit card</span>
                    </div>
                    {selectedMethod === "card" && (
                        <div className="payment-details">
                            <div className="card-inputs">
                                <input type="text" placeholder="1234 1234 1234 1234" disabled />
                                <input type="text" placeholder="Cardholder name" disabled />
                                <input type="text" placeholder="Expire Date" disabled />
                                <input type="text" placeholder="CVV" disabled />
                            </div>
                            <p className="upload-hint" style={{ marginTop: '1rem' }}>Enter card details (Simulated)</p>
                        </div>
                    )}
                </div> */}

                {/* UPI Payment */}
                <div className={`payment-method ${selectedMethod === "upi" ? "selected" : ""}`} onClick={() => setSelectedMethod("upi")}>
                    <div className="payment-method-header">
                        <input type="radio" checked={selectedMethod === "upi"} readOnly />
                        <span>UPI payment</span>
                    </div>
                    {selectedMethod === "upi" && (
                        <div className="payment-details qr-section">
                            <p>Scan using Google Pay / PhonePe or any other UPI app</p>
                            <div className="qr-code-wrapper">
                                <img src={qrUrl} alt="UPI QR Code" style={{ width: '150px' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span>UPI ID: {upiId}</span>
                                <button className="copy-upi-btn" onClick={(e) => { e.stopPropagation(); copyUpiId(); }}>Copy UPI ID</button>
                            </div>
                            {isMobile && (
                                <a href={upiLink} className="submit-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                                    Open UPI App
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Razorpay / Other */}
                <div className={`payment-method ${selectedMethod === "razorpay" ? "selected" : ""}`} onClick={() => setSelectedMethod("razorpay")}>
                    <div className="payment-method-header">
                        <input type="radio" checked={selectedMethod === "razorpay"} readOnly />
                        <span>Recommended: Razorpay (Cards, Netbanking)</span>
                    </div>
                    <div className="payment-details">
                        <div className="other-gateways" style={{ fontSize: '1.2rem', gap: '2rem' }}>
                            {/* <span style={{ color: '#2b3481', fontWeight: 'bold' }}>Razorpay</span> */}
                            {/* <span style={{ color: '#003087', fontWeight: 'bold' }}>PayPal</span>
                            <span style={{ color: '#6772e5', fontWeight: 'bold' }}>Stripe</span> */}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button className="submit-btn" style={{ background: '#666', flex: 1 }} onClick={prevStep}>
                    Back
                </button>
                <button className="submit-btn" style={{ flex: 2 }} onClick={handleRazorpayPayment} disabled={loading}>
                    {loading ? "Processing..." : selectedMethod === "razorpay" ? `Pay ₹${amount} with Razorpay` : "Continue"}
                </button>
            </div>
        </div>
    );
}

function Step3({ formData }) {
    const handleClose = () => {
        window.location.href = '/';
    };

    const handleWhatsAppRedirect = () => {
        const message = `Hello Akshayavaahini Support, I have successfully completed my payment for registration. Name: ${formData.firstName} ${formData.lastName}.`;
        window.open(`https://wa.me/918111956781?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleReport = () => {
        const subject = encodeURIComponent("Registration Issue Report");
        const body = encodeURIComponent(`Issue reported by ${formData.firstName} ${formData.lastName} (${formData.phone})\n\nDetails: `);
        window.location.href = `mailto:Zorokartindia2025@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="success-modal-overlay">
            <div className="success-modal-container">
                <button className="modal-close-btn" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="success-modal-content">
                    <h2 className="success-modal-title">Payment Successful</h2>

                    <div className="success-checkmark-circle">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div className="success-message">
                        Success ! Look out for a WhatsApp message from us with your <span>invoice details</span>
                    </div>

                    <div className="facing-problem">
                        Facing any problem
                        <a href="#" className="report-link" onClick={(e) => { e.preventDefault(); handleReport(); }}>Report</a>
                    </div>
                </div>

                <a href="#" className="whatsapp-action-bar" onClick={(e) => { e.preventDefault(); handleWhatsAppRedirect(); }}>
                    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                    <span className="whatsapp-text">Open WhatsApp</span>
                </a>
            </div>
        </div>
    );
}
