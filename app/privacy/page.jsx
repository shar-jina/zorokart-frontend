"use client";

import React from 'react';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{ ...textStyle, color: '#64748B', fontWeight: '500', marginBottom: '48px' }}>
          Last updated: 04/05/2026
        </p>

        <section style={sectionStyle}>
          <p style={textStyle}>
            Akshya Vaahini (“we”, “us”, “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit or use our website <strong>akshayavahini.com</strong> and any related services (collectively, the “Services”).
          </p>
          <p style={textStyle}>
            By accessing or using our website, you agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>1. Information We Collect</h2>
          <p style={textStyle}>We may collect the following types of information:</p>
          
          <h3 style={{ ...textStyle, fontWeight: '700', marginBottom: '8px' }}>1.1 Information you provide directly</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>Name</li>
            <li style={listItemStyle}>Email address</li>
            <li style={listItemStyle}>Phone number</li>
            <li style={listItemStyle}>City/Location</li>
            <li style={listItemStyle}>Any other information you enter in contact forms, enquiry forms, or subscription forms.</li>
          </ul>

          <h3 style={{ ...textStyle, fontWeight: '700', marginBottom: '8px' }}>1.2 Automatically collected information</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>IP address</li>
            <li style={listItemStyle}>Browser type and version</li>
            <li style={listItemStyle}>Device type and operating system</li>
            <li style={listItemStyle}>Pages visited, time and date of visit, time spent on pages</li>
            <li style={listItemStyle}>Referring site or source (e.g., Google Ads, social media)</li>
          </ul>

          <h3 style={{ ...textStyle, fontWeight: '700', marginBottom: '8px' }}>1.3 Cookies and similar technologies</h3>
          <p style={textStyle}>We may use cookies and similar tracking technologies to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Remember your preferences</li>
            <li style={listItemStyle}>Improve website performance and user experience</li>
            <li style={listItemStyle}>Analyse traffic and usage patterns</li>
          </ul>
          <p style={textStyle}>You can disable cookies in your browser settings, but some parts of the website may not function properly.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. How We Use Your Information</h2>
          <p style={textStyle}>We may use your personal information to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Respond to your enquiries, requests, and messages</li>
            <li style={listItemStyle}>Provide information about our services and offerings</li>
            <li style={listItemStyle}>Process and manage contact form submissions and callbacks</li>
            <li style={listItemStyle}>Improve and personalise our website and Services</li>
            <li style={listItemStyle}>Conduct analytics, reporting, and marketing performance measurements (including Google Ads and other platforms)</li>
            <li style={listItemStyle}>Send you updates, newsletters, or promotional communications (only if you have consented or as permitted by law)</li>
            <li style={listItemStyle}>Maintain the security and integrity of our website</li>
            <li style={listItemStyle}>Comply with legal obligations and resolve disputes</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>3. Legal Basis for Processing</h2>
          <p style={textStyle}>Depending on your location, we may process your data based on:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Your consent:</strong> When you submit a form or subscribe</li>
            <li style={listItemStyle}><strong>Legitimate interests:</strong> Improving our services, securing our website, responding to enquiries</li>
            <li style={listItemStyle}><strong>Legal obligations:</strong> Record-keeping, compliance</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. Sharing and Disclosure of Information</h2>
          <p style={textStyle}>We do not sell your personal information. We may share your information with:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Service providers and partners who help us operate the website, send emails, host data, or provide analytics and advertising tools.</li>
            <li style={listItemStyle}>Professional advisors (e.g., legal, accounting) where necessary.</li>
            <li style={listItemStyle}>Government authorities or law enforcement when required by law, regulation, or legal process.</li>
          </ul>
          <p style={textStyle}>These third parties are expected to use your information only for the services they provide to us and to protect your information appropriately.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>5. International Transfers</h2>
          <p style={textStyle}>
            If our service providers or servers are located outside your country, your information may be transferred to and processed in other countries. We will take reasonable steps to ensure your data is handled securely and in accordance with this Privacy Policy.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. Data Retention</h2>
          <p style={textStyle}>We retain your personal information only for as long as necessary to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Fulfil the purposes described in this Privacy Policy</li>
            <li style={listItemStyle}>Comply with legal, accounting, or reporting requirements</li>
            <li style={listItemStyle}>Resolve disputes and enforce our agreements</li>
          </ul>
          <p style={textStyle}>After this period, data may be deleted, anonymised, or stored in a secure archive.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>7. Data Security</h2>
          <p style={textStyle}>
            We use reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>8. Your Rights</h2>
          <p style={textStyle}>Depending on your local laws, you may have the right to:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Access the personal information we hold about you</li>
            <li style={listItemStyle}>Request correction of inaccurate or incomplete information</li>
            <li style={listItemStyle}>Request deletion of your information (subject to legal/legitimate requirements)</li>
            <li style={listItemStyle}>Object to or restrict certain types of processing</li>
            <li style={listItemStyle}>Withdraw consent where processing is based on consent</li>
            <li style={listItemStyle}>Opt out of marketing communications</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>9. Third-Party Links</h2>
          <p style={textStyle}>
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or policies of those third-party sites. We encourage you to read their privacy policies before providing any personal information.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>10. Use of Advertising & Analytics Tools</h2>
          <p style={textStyle}>We may use tools such as:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Google Analytics</li>
            <li style={listItemStyle}>Google Ads conversion tracking and remarketing</li>
            <li style={listItemStyle}>Other analytics and advertising platforms</li>
          </ul>
          <p style={textStyle}>
            These services may use cookies or similar technologies to collect information about your use of our website and show relevant ads on other sites or platforms. You can manage ad personalisation in your Google account settings or browser settings.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>11. Changes to This Privacy Policy</h2>
          <p style={textStyle}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or technology. Any changes will be posted on this page with an updated “Last updated” date. We encourage you to review this page periodically.
          </p>
        </section>

        <section style={{ ...sectionStyle, backgroundColor: '#F8FAFC', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <h2 style={headingStyle}>12. Contact Us</h2>
          <p style={textStyle}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:
          </p>
          <div style={{ marginTop: '16px' }}>
            <p style={{ ...textStyle, fontWeight: '700', marginBottom: '4px' }}>Akshya Vaahini</p>
            <p style={textStyle}>Email: Support@Akshayavahini.com</p>
            <p style={textStyle}>Phone: +91 9876543216</p>
            <p style={textStyle}>Address: Kozhikode, Kerala, India</p>
          </div>
        </section>
      </div>
    </div>
  );
}
