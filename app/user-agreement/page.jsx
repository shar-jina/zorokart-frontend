"use client";

import React from 'react';

export default function UserAgreement() {
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
          User Agreement & Disclaimer
        </h1>
        <p style={{ ...textStyle, color: '#64748B', fontWeight: '500', marginBottom: '48px' }}>
          Last updated: January 27, 2026
        </p>

        <section style={sectionStyle}>
          <p style={{ ...textStyle, fontWeight: '700', color: '#0F172A' }}>
            PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING OUR WEBSITE.
          </p>
          <p style={textStyle}>
            The information provided on the Akshaya Vaahini website <strong>akshayavaahini.com</strong> (the "Website") is for general informational purposes only. By using this Website, you acknowledge and agree to the following:
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>1. No Warranties or Guarantees</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>All content is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied.</li>
            <li style={listItemStyle}>We do not guarantee the accuracy, completeness, reliability, or timeliness of any information on this Website.</li>
            <li style={listItemStyle}>We make no representations about the suitability of the information for your specific needs or purposes.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. Not Professional Advice</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>The information on this Website does not constitute professional, legal, financial, medical, business, or other expert advice.</li>
            <li style={listItemStyle}>Always consult qualified professionals before making decisions based on information found here.</li>
            <li style={listItemStyle}>We are not liable for any actions you take based on Website content.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>3. Third-Party Links & Content</h2>
          <p style={textStyle}>Our Website may contain links to third-party websites, services, or resources. These links are provided for convenience only. We do not endorse, control, or take responsibility for:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Third-party content, accuracy, or legality</li>
            <li style={listItemStyle}>Third-party privacy or security practices</li>
            <li style={listItemStyle}>Products, services, or information offered by third parties</li>
          </ul>
          <p style={textStyle}>Use third-party links at your own risk.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. Limitation of Liability</h2>
          <p style={textStyle}>Akshaya Vaahini, its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Use of or inability to use the Website</li>
            <li style={listItemStyle}>Errors or omissions in content</li>
            <li style={listItemStyle}>Unauthorized access to or alteration of transmissions/data</li>
            <li style={listItemStyle}>Statements or conduct of any third parties on the Website</li>
          </ul>
          <p style={textStyle}>Our total liability shall not exceed INR 1,000 (One Thousand Rupees).</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>5. Changes to Content</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>We reserve the right to modify, update, or remove any content on the Website at any time without notice.</li>
            <li style={listItemStyle}>Previously published information may no longer be valid.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. Availability</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>We strive to keep the Website available but do not guarantee uninterrupted access.</li>
            <li style={listItemStyle}>We may perform maintenance or experience technical difficulties without prior notice.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>7. Governing Law</h2>
          <p style={textStyle}>
            This Disclaimer is governed by the laws of India, with exclusive jurisdiction in the courts of <strong>Ernakulam, Kerala</strong>.
          </p>
        </section>

        <section style={{ ...sectionStyle, backgroundColor: '#F8FAFC', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', marginTop: '48px' }}>
          <p style={{ ...textStyle, fontWeight: '600' }}>
            By continuing to use this Website, you accept full responsibility for your decisions and actions. If you do not agree with this Disclaimer, please discontinue use immediately.
          </p>
          <div style={{ marginTop: '24px' }}>
            <p style={{ ...textStyle, fontWeight: '700', marginBottom: '4px' }}>Questions?</p>
            <p style={textStyle}>Email: info@akshayavaahini.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
