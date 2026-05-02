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
        <footer className="relative" style={{ backgroundColor: '#F8F9FA', paddingTop: '0', paddingBottom: '40px', paddingLeft: '24px', paddingRight: '24px', fontFamily: "'Poppins', sans-serif" }}>
            {/* Top Green Border */}
            <div style={{ width: '100%', height: '6px', backgroundColor: '#42A147', position: 'absolute', top: 0, left: 0 }}></div>

            <div className="max-w-7xl mx-auto" style={{ paddingTop: '64px' }}>
                {/* Unified 5-Column Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '200px repeat(4, 1fr)', gap: '48px 32px', marginBottom: '64px' }}>
                    {/* Row 1 */}
                    <div style={{ gridColumn: '1' }}>
                        <Link href="/" style={{ display: 'inline-block', marginBottom: '12px', textDecoration: 'none' }}>
                            <Image src="/images/logo.png" alt="Akshaya Vahini" width={60} height={30} className="object-contain" />
                        </Link>
                        <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', marginBottom: '4px', textTransform: 'uppercase', lineHeight: '1.2' }}>AKSHAYA VAAHINI</h3>
                        <p style={{ color: '#000000', fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            From Our kitchen to Your Heart
                        </p>
                    </div>

                    <div style={{ gridColumn: '2', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '40px' }}>
                        <h4 style={{ color: '#000000', fontWeight: 'bold', marginBottom: '8px', fontSize: '16px' }}>About us</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, marginBottom: '16px', textAlign: 'left' }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/#about" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>How it works</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/#about" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Why join us</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/#how-to-register" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>How to register</Link></li>
                        </ul>

                        <h4 style={{ color: '#000000', fontWeight: 'bold', marginTop: '16px', marginBottom: '8px', fontSize: '16px', textAlign: 'left' }}>Contact Information</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                            <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#000000', fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                <span style={{ color: '#000000', fontWeight: '500', fontSize: '14px' }}>Kozhikode, Kerala</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#000000', fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                <span style={{ color: '#000000', fontWeight: '500', fontSize: '14px' }}>Support@Akshayavahini.com</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '28px', marginBottom: '12px', marginLeft: '-28px' }}>
                                <FontAwesomeIcon icon={faPhone} style={{ color: '#000000', fontSize: '16px', width: '16px', position: 'absolute', left: 0 }} />
                                <span style={{ color: '#000000', fontWeight: '500', fontSize: '14px' }}>+91 9876543216</span>
                            </li>
                        </ul>
                    </div>

                    <div style={{ gridColumn: '3' }}>
                        <h4 style={{ color: '#000000', fontWeight: 'bold', marginBottom: '24px', fontSize: '16px' }}>Quick links</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/register" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Vendor Registration</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/register" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Agent Registration</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/admin/login" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Vendor Login</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/admin/login" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Agent Login</Link></li>
                        </ul>
                    </div>

                    <div style={{ gridColumn: '4' }}>
                        <h4 style={{ color: '#000000', fontWeight: 'bold', marginBottom: '24px', fontSize: '16px' }}>Support</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/#questions" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>FAQs</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Help Center</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Contact Us</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Report an Issue</Link></li>
                        </ul>
                    </div>

                    <div style={{ gridColumn: '5' }}>
                        <h4 style={{ color: '#000000', fontWeight: 'bold', marginBottom: '24px', fontSize: '16px' }}>Legal</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}><Link href="/terms" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Terms & Conditions</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/privacy" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>Privacy policy</Link></li>
                            <li style={{ marginBottom: '8px' }}><Link href="/user-agreement" style={{ color: '#000000', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>User Agreement</Link></li>
                        </ul>
                    </div>

                    <div style={{ gridColumn: '5' }}>
                        <h4 style={{ color: '#000000', fontWeight: 'bold', marginBottom: '24px', fontSize: '16px', textAlign: 'left' }}>Follow us on</h4>
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
                    <p style={{ color: '#000000', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '18px' }}>©</span> {currentYear} Akshayavahini. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
