"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer-container relative" style={{ paddingTop: '0', paddingBottom: '40px', paddingLeft: '24px', paddingRight: '24px', fontFamily: "'Poppins', sans-serif" }}>
            {/* Top Green Border */}
            <div style={{ width: '100%', height: '6px', backgroundColor: '#42A147', position: 'absolute', top: 0, left: 0 }}></div>

            <div className="max-w-7xl mx-auto" style={{ paddingTop: '64px' }}>
                {/* Unified 5-Column Grid */}
                <div className="footer-grid">
                    {/* Column 1 - Brand */}
                    <div className="footer-col-1">
                        <Link href="/" style={{ display: 'inline-block', marginBottom: '12px', textDecoration: 'none' }}>
                            <Image src="/images/logo.png" alt="Akshaya Vahini" width={60} height={30} className="object-contain" />
                        </Link>
                        <h3 className="footer-logo-title" style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '4px', textTransform: 'uppercase', lineHeight: '1.2' }}>AKSHAYAVAHINI</h3>
                        <p style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase' }}>
                            From Our kitchen to Your Heart
                        </p>
                    </div>

                    {/* Column 2 - About + Contact (Desktop Version) */}
                    <div className="footer-col-2">
                        <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '16px' }}>About us</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, marginBottom: '16px', textAlign: 'left' }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/#about" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>How it works</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/#about" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Why join us</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/#how-to-register" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>How to register</Link></li>
                        </ul>

                        {/* Hidden on Mobile - Keeps Desktop Design */}
                        <div className="hidden lg:block">
                            <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginTop: '16px', marginBottom: '8px', fontSize: '16px', textAlign: 'left' }}>Contact Information</h4>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                                <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" style={{ fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                    <span style={{ fontWeight: '500', fontSize: '14px' }}>Kozhikode, Kerala</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon" style={{ fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                    <span style={{ fontWeight: '500', fontSize: '14px' }}>Support@Akshayavahini.com</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                    <FontAwesomeIcon icon={faPhone} className="footer-icon" style={{ fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                    <span style={{ fontWeight: '500', fontSize: '14px' }}>+91 9876543216</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 - Quick Links */}
                    <div className="footer-col-3">
                        <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '16px' }}>Quick links</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/register" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Vendor Registration</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/register" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Agent Registration</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/admin/login" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Vendor Login</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/admin/login" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Agent Login</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Support */}
                    <div className="footer-col-4">
                        <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '16px' }}>Support</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/#questions" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>FAQs</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Help Center</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Contact Us</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Report an Issue</Link></li>
                        </ul>
                    </div>

                    {/* Column 5 - Legal */}
                    <div className="footer-col-5">
                        <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '16px' }}>Legal</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/terms" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Terms & Conditions</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/privacy" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Privacy policy</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/user-agreement" style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>User Agreement</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information (Mobile Only Version) */}
                    <div className="footer-col-contact lg:hidden">
                        <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '16px', textAlign: 'left' }}>Contact Information</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                            <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" style={{ fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                <span style={{ fontWeight: '500', fontSize: '14px' }}>Kozhikode, Kerala</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" style={{ fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                <span style={{ fontWeight: '500', fontSize: '14px' }}>Support@Akshayavahini.com</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                <FontAwesomeIcon icon={faPhone} className="footer-icon" style={{ fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                <span style={{ fontWeight: '500', fontSize: '14px' }}>+91 9876543216</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="footer-col-6">
                        <h4 className="footer-section-title" style={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '16px', textAlign: 'left' }}>Follow us on</h4>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Link href="#" style={{ textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: "#E4405F" }} />
                            </Link>
                            <Link href="#" style={{ textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px', color: "#1877F2" }} />
                            </Link>
                            <Link href="#" style={{ textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '24px', color: "#FF0000" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{ paddingTop: '40px', textAlign: 'center', borderTop: '1px solid #E5E7EB' }}>
                    <p style={{ fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '18px' }}>©</span> {currentYear} Akshayavahini. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

