"use client";

import React from 'react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const sectionStyle = {
    marginBottom: '32px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#42A147',
    marginBottom: '16px',
    fontFamily: "'Poppins', sans-serif",
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#334155',
    marginBottom: '12px',
    fontFamily: "'Inter', sans-serif",
  };

  const listStyle = {
    paddingLeft: '24px',
    marginBottom: '16px',
    listStyleType: 'disc',
  };

  const listItemStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#334155',
    marginBottom: '8px',
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0F172A', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>
          Terms & Conditions
        </h1>
        <p style={{ ...textStyle, color: '#64748B', fontWeight: '500', marginBottom: '48px' }}>
          Last updated: January 27, 2026
        </p>

        <section style={sectionStyle}>
          <p style={textStyle}>
            Welcome to Akshya Vaahini ("we", "us", "our"). These Terms & Conditions ("Terms") govern your access to and use of our website <strong>akshayavaahini.com</strong> and any related services (collectively, the "Services").
          </p>
          <p style={textStyle}>
            By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>1. Use of Our Services</h2>
          <p style={textStyle}>You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Post or transmit unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable material.</li>
            <li style={listItemStyle}>Use our Services to spam, send unsolicited emails, or engage in phishing or other fraudulent activities.</li>
            <li style={listItemStyle}>Interfere with the security of our website or other users' data.</li>
            <li style={listItemStyle}>Attempt to gain unauthorized access to any portion of our Services.</li>
            <li style={listItemStyle}>Copy, reproduce, or distribute our content without permission.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. Contact Form Usage</h2>
          <p style={textStyle}>Our Contact Us form is provided for legitimate inquiries only:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Required Information:</strong> Full Name, Email, Phone (+91 format), Subject, and Message are mandatory.</li>
            <li style={listItemStyle}><strong>Purpose:</strong> Service inquiries, support requests, business questions.</li>
            <li style={listItemStyle}><strong>Prohibited:</strong> Marketing pitches, spam, illegal requests.</li>
            <li style={listItemStyle}><strong>Response Time:</strong> We aim to respond within 24-48 hours during business days.</li>
            <li style={listItemStyle}><strong>No Guarantee:</strong> We are not obligated to respond to every submission.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>3. User Responsibilities</h2>
          <p style={textStyle}>When you provide information through our Services (forms, emails), you represent that:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>All information is accurate, complete, and current.</li>
            <li style={listItemStyle}>You have the legal right to share the information.</li>
            <li style={listItemStyle}>You will not impersonate any person or entity.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. Intellectual Property</h2>
          <p style={textStyle}>
            All content on our website (text, images, logos, design) is owned by Akshya Vaahini or our licensors and protected by copyright, trademark, and other laws.
          </p>
          <p style={textStyle}>You may not:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Copy, modify, distribute, or create derivative works from our content.</li>
            <li style={listItemStyle}>Use our logo, branding, or trademarks without written permission.</li>
          </ul>
          <p style={textStyle}>
            <strong>Fair Use:</strong> You may print or download content for personal, non-commercial use only.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>5. Third-Party Links</h2>
          <p style={textStyle}>
            Our website may contain links to third-party websites. We do not control, endorse, or take responsibility for the content, privacy practices, or availability of these sites. Use them at your own risk.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. Limitation of Liability</h2>
          <p style={textStyle}>To the fullest extent permitted by law:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Our Services are provided "as is" and "as available" without warranties of any kind.</li>
            <li style={listItemStyle}>We do not guarantee that our website will be error-free, secure, or uninterrupted.</li>
            <li style={listItemStyle}>We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our Services.</li>
            <li style={listItemStyle}>Our total liability shall not exceed INR 1,000 (One Thousand Rupees).</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>7. No Professional Advice</h2>
          <p style={textStyle}>
            Information on our website is for general informational purposes only. It does not constitute professional, legal, financial, medical, or other advice. Always consult qualified professionals for specific guidance.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>8. Privacy</h2>
          <p style={textStyle}>
            Your use of our Services is also governed by our <Link href="/privacy" style={{ color: '#42A147', fontWeight: '600', textDecoration: 'underline' }}>Privacy Policy</Link>, which explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>9. Termination</h2>
          <p style={textStyle}>
            We may suspend or terminate your access to our Services at any time, without notice, if we believe you have violated these Terms or for any other reason.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>10. Governing Law</h2>
          <p style={textStyle}>
            These Terms are governed by the laws of India, with exclusive jurisdiction in the courts of <strong>Ernakulam, Kerala</strong>.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>11. Changes to Terms</h2>
          <p style={textStyle}>
            We may update these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our Services after changes constitutes acceptance.
          </p>
        </section>

        <section style={{ ...sectionStyle, backgroundColor: '#F8FAFC', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <h2 style={headingStyle}>12. Contact Us</h2>
          <p style={textStyle}>
            Questions about these Terms? Reach us at:
          </p>
          <div style={{ marginTop: '16px' }}>
            <p style={{ ...textStyle, fontWeight: '700', marginBottom: '4px' }}>Akshya Vaahini</p>
            <p style={textStyle}>Email: info@akshayavaahini.com</p>
            <p style={textStyle}>Phone: +91 9876543216</p>
            <p style={textStyle}>Address: Ernakulam, Kerala, India</p>
          </div>
        </section>
      </div>
    </div>
  );
}
