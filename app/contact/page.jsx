"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const containerStyle = {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    paddingTop: '160px',
    paddingBottom: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif"
  };

  const contentBoxStyle = {
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  };

  const responseBannerStyle = {
    backgroundColor: '#E8F5E9',
    border: '1px solid #42A147',
    borderRadius: '16px',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    margin: '32px auto 0',
    width: 'fit-content',
    boxShadow: '0 4px 12px rgba(66, 161, 71, 0.1)'
  };

  const contactListStyle = {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    padding: '24px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    backgroundColor: '#F8FAFC',
    border: '1px solid #F1F5F9'
  };

  const iconStyle = {
    fontSize: '20px',
    color: '#42A147',
    width: '24px'
  };

  const textContainerStyle = {
    textAlign: 'left',
    minWidth: '280px'
  };

  const labelStyle = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '4px'
  };

  const valueStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1E293B',
  };

  return (
    <div style={containerStyle}>
      <div style={contentBoxStyle}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '800', 
          color: '#0F172A', 
          letterSpacing: '-0.02em'
        }}>
          Contact Us
        </h1>
        
        {/* PROMINENT RESPONSE BANNER */}
        <div style={responseBannerStyle}>
          <FontAwesomeIcon icon={faBolt} style={{ color: '#42A147', fontSize: '18px' }} />
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#1B5E20' }}>
            Instant Response within 24 Hours
          </span>
        </div>

        <p style={{ 
          fontSize: '17px', 
          color: '#64748B', 
          marginTop: '32px', 
          lineHeight: '1.6',
          maxWidth: '500px',
          margin: '32px auto 0'
        }}>
          Need help? Our dedicated support team is standing by to assist you with any questions.
        </p>

        <div style={contactListStyle}>
          {/* Email Item */}
          <div style={itemStyle} className="hover:border-green-500 hover:shadow-md">
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <div style={textContainerStyle}>
              <p style={labelStyle}>Email Us</p>
              <p style={valueStyle}>info@akshayavaahini.com</p>
            </div>
          </div>

          {/* Phone Item */}
          <div style={itemStyle} className="hover:border-green-500 hover:shadow-md">
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            <div style={textContainerStyle}>
              <p style={labelStyle}>Call Us</p>
              <p style={valueStyle}>+91 9876543216</p>
            </div>
          </div>

          {/* Location Item */}
          <div style={itemStyle} className="hover:border-green-500 hover:shadow-md">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            <div style={textContainerStyle}>
              <p style={labelStyle}>Our Office</p>
              <p style={valueStyle}>Ernakulam, Kerala, India</p>
            </div>
          </div>

          {/* Hours Item */}
          <div style={itemStyle} className="hover:border-green-500 hover:shadow-md">
            <FontAwesomeIcon icon={faClock} style={iconStyle} />
            <div style={textContainerStyle}>
              <p style={labelStyle}>Business Hours</p>
              <p style={valueStyle}>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
