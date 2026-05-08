"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faFemale, faFireAlt, faTruck, faLeaf, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function About() {
  const imgStyle = { width: "100%", height: "100%", objectFit: "cover" };
  const cardStyle = { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px", width: "100%", maxWidth: "350px" };
  const imageCard = { width: "142px", height: "142px", borderRadius: "50%", overflow: "hidden", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center" };

  const whyUsCards = [
    { icon: faUtensils, title: "Pure Home Food", desc: "No factory-made meals, only authentic home cooking prepared with love." },
    { icon: faFemale, title: "Women-led Kitchens", desc: "Empowering homemakers through clean and hygienic community kitchens." },
    { icon: faFireAlt, title: "Hot & Fresh", desc: "Enjoy meals that are prepared fresh and served steaming hot to your table." },
    { icon: faTruck, title: "Safe Delivery", desc: "Our reliable delivery partners ensure your food reaches you safely and on time." },
    { icon: faLeaf, title: "Eco-Friendly", desc: "We use reusable or environmentally friendly containers to protect our planet." },
    { icon: faHandHoldingHeart, title: "Trustworthy Service", desc: "Reliable local service rooted in the trust of a mother’s care." }
  ];

  const specialityCards = [
    { img: "/images/about1.png", text: "Ensures food safety and quality." },
    { img: "/images/about2.png", text: "Since it is not industrial-scale, say goodbye to stale food; always fresh home-cooked meals." },
    { img: "/images/about3.png", text: "Avoid plastics; enjoy safe, hot, home-cooked meals in steel containers." },
    { img: "/images/about4.png", text: "Location-based delivery; hot food reaches you in the shortest possible time." },
    { img: "/images/about5.png", text: "Reach local customers faster; achieve superior business growth." }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", color: "var(--foreground)", fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO SECTION - FULL RESTORATION */}
      <section className="about-hero-section">
        <img src="/images/abt.png" alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        
        {/* Floating Images (Visible on both Desktop and Mobile) */}
        <div className="about-hero-floating-images">
            <img src="/images/abt1.png" alt="" className="animate-float" style={{ position: 'absolute', top: "20%", left: "15%", width: "clamp(40px, 8vw, 80px)", zIndex: 5 }} />
            <img src="/images/abt2.png" alt="" className="animate-float-delayed" style={{ position: 'absolute', top: "15%", right: "20%", width: "clamp(45px, 9vw, 90px)", zIndex: 5 }} />
            <img src="/images/abt5.png" alt="" className="animate-float" style={{ position: 'absolute', top: "65%", left: "20%", width: "clamp(35px, 7vw, 70px)", zIndex: 5 }} />
            <img src="/images/abt6.png" alt="" className="animate-float-delayed" style={{ position: 'absolute', top: "70%", right: "15%", width: "clamp(45px, 10vw, 85px)", zIndex: 5 }} />
            <img src="/images/abt7.png" alt="" className="animate-float" style={{ position: 'absolute', top: "45%", left: "10%", width: "clamp(30px, 8vw, 60px)", zIndex: 5 }} />
            <img src="/images/abt8.png" alt="" className="animate-float-delayed" style={{ position: 'absolute', top: "50%", right: "10%", width: "clamp(35px, 8vw, 75px)", zIndex: 5 }} />
        </div>


        <div className="relative z-10 text-center">
          <h1 style={{ fontSize: "clamp(2rem, 7vw, 6rem)", fontWeight: "600", color: "#42A147" }}>About Us</h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="about-content-section">
        <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#000000", marginBottom: "30px", maxWidth: "1000px", margin: "0 auto 30px" }}>
          "Akshaya Vaahini: A mother’s touch and care, delivered to your doorstep"
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#000000", maxWidth: "1300px", margin: "0 auto", fontWeight: "400", fontFamily: "'Roboto', sans-serif" }}>
          "Akshaya Vaahini is a community-centric food delivery platform designed to transform the culinary talents and unique recipes of homemakers into a secure and steady source of income. Our primary goal is to provide customers with unadulterated, hygienic, and steaming hot home-cooked meals from their own neighborhood. By connecting local 'Culinary Queens' with nearby residents, Akshaya Vaahini ensures a fresh dining experience rooted in the trust of 'pure food from a mother’s hands.' Just as a mother nourishes her child with selfless love, she prepares food for her children with that same purity and devotion. We guarantee that the mothers of Akshaya Vaahini will bring that very culture of love and purity to your table."
        </p>
      </section>

      {/* WHY AKSHAYA VAHINI SECTION */}
      <section className="about-page-section overflow-hidden">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 className="about-heading">Why Akshaya Vahini?</h2>
          
          <div className="hidden lg:flex about-cards-row" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {whyUsCards.map((card, index) => (
              <div key={index} style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "310px", height: "257px", margin: "12px" }}>
                <div style={{ width: "80px", height: "80px", backgroundColor: "#42A147", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", flexShrink: 0 }}>
                  <FontAwesomeIcon icon={card.icon} style={{ fontSize: "2rem", color: "#fff" }} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#000", marginBottom: "15px", fontFamily: "'Poppins', sans-serif" }}>{card.title}</h3>
                <p style={{ fontSize: "15px", color: "#000", lineHeight: "1.4", fontFamily: "'Poppins', sans-serif" }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:hidden about-marquee-wrapper">
            <div className="about-marquee-content">
              {[...whyUsCards, ...whyUsCards].map((card, index) => (
                <div key={index} className="about-marquee-card">
                  <div className="about-marquee-icon-box"><FontAwesomeIcon icon={card.icon} style={{ fontSize: "1.5rem", color: "#fff" }} /></div>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "8px" }}>{card.title}</h3>
                  <p style={{ fontSize: "12px", color: "#000", lineHeight: "1.4" }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="about-page-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 className="about-heading">Our Advantages</h2>
          <div className="about-flex-container">
            <div style={{ flex: "1", minWidth: "400px" }}>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Boosts Productivity: Empowering efficient home-based operations. <br />
                Strengthens Local Food Systems: Supporting the neighborhood economy. <br />
                Minimizes Food Waste: Sustainable cooking and conscious consumption. <br />
                Empowers Women-Led Micro-Businesses: Sustaining family happiness through growth. <br />
                Promotes Healthy Eating Habits: Bringing nutritious, home-cooked meals back to the table. <br />
                Sustainable Income for Homemakers: Financial independence and long-term security.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "400px", position: "relative", height: "450px" }} className="about-adv-images">
              <img src="/images/adv1.png" alt="" style={{ width: "318px", height: "271px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", position: "absolute", top: "0", left: "0" }} />
              <img src="/images/adv2.png" alt="" style={{ width: "318px", height: "271px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", position: "absolute", bottom: "0", right: "0" }} />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="about-page-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 className="about-heading">Our Mission</h2>
          <div className="about-flex-container">
            <div style={{ flex: "1", minWidth: "400px" }}>
              <img src="/images/Abt3.png" alt="" style={{ width: "550px", height: "355px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
            </div>
            <div style={{ flex: "1.5", minWidth: "450px" }}>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#000", fontFamily: "'Poppins', sans-serif" }}>
                Through a location-based distribution system, we have the opportunity to ensure the unity and collective success of local homemakers.
              </p>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "black", marginTop: "20px", fontFamily: "'Poppins', sans-serif" }}>
                Your primary mission is to support homemakers facing financial difficulties by providing them with economic stability and security. We are equally committed to ensuring our customers receive pure, hot, and delicious home-cooked meals prepared with love.
              </p>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "black", marginTop: "20px", fontFamily: "'Poppins', sans-serif" }}>
                Those who work with us, or wish to join us, must be passionate about cooking or skilled in traditional culinary methods.
              </p>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "black", marginTop: "20px", fontFamily: "'Poppins', sans-serif" }}>
                We take responsibility for protecting the environment by delivering food in reusable or eco-friendly containers, thereby preventing pollution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-page-section">
        <div className="about-values-container">
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "30px" }}>
            <img src="/images/pic1.png" alt="" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
            <h2 style={{ fontSize: "66px", fontWeight: "700", color: "#42A147", margin: "0" }}>From Our Kitchen to Your Heart</h2>
          </div>
          <div style={{ flex: "1" }}>
            <img src="/images/pic2.png" alt="" style={{ width: "100%", height: "620px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
          </div>
        </div>
      </section>

      {/* OUR SPECIALITY SECTION */}
      <section className="about-page-section overflow-hidden">
        <div className="about-inner-container">
          <h2 className="about-heading">Our Speciality</h2>
          {/* Desktop View - Forced 3-over-2 layout */}
          <div className="hidden lg:block mb-16">
            {/* Row 1: 3 Cards */}
            <div className="flex justify-center gap-x-12 mb-16">
              {specialityCards.slice(0, 3).map((card, index) => (
                <div key={index} style={cardStyle}>
                  <div style={imageCard}><img src={card.img} alt="" style={imgStyle} /></div>
                  <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>{card.text}</p>
                </div>
              ))}
            </div>
            {/* Row 2: 2 Centered Cards */}
            <div className="flex justify-center gap-x-12">
              {specialityCards.slice(3, 5).map((card, index) => (
                <div key={index} style={cardStyle}>
                  <div style={imageCard}><img src={card.img} alt="" style={imgStyle} /></div>
                  <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden about-marquee-wrapper">
            <div className="about-marquee-content-slow">
              {[...specialityCards, ...specialityCards].map((card, index) => (
                <div key={index} className="about-marquee-card-alt">
                   <div style={imageCard} className="mx-auto mb-4 scale-75"><img src={card.img} alt="" style={imgStyle} /></div>
                   <p style={{ fontSize: "14px", color: "black", textAlign: "center" }}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section className="about-page-section">
        <div className="about-inner-container">
          <h2 className="about-heading">Business</h2>
          <div className="about-business-flex">
            <div style={{ flex: "1" }}><img src="/images/pic3.png" alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} /></div>
            <div style={{ flex: "2", paddingLeft: "40px" }} className="about-business-text">
              <p style={{ fontSize: "18px", lineHeight: "2", color: "black", fontFamily: "'Poppins', sans-serif", margin: 0, textAlign: "left" }}>
                Commission-based platform. <br />
                No large investment is required for homemakers. <br />
                Daily/weekly payment system. <br />
                Dashboard showing transparent earnings. <br />
                Sincere support to achieve greater growth with low-cost promotion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}