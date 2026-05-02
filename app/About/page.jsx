"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faFemale, faFireAlt, faTruck, faLeaf, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "12px",
  };
  const imageCard = {
    width: "142px",
    height: "142px",
    borderRadius: "50%",
    overflow: "hidden",
    background: "var(--card-bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    marginTop: "12px",
    fontSize: "12px",
    lineHeight: "18px",
    color: "var(--foreground)",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  };

  const cardStyle1 = {
    background: "var(--card-bg)",
    borderRadius: "16px",
    overflow: "hidden",
    height: "456px",
    display: "flex",
    flexDirection: "column",
  };

  const textOnImage = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    color: "#fff",
    textAlign: "center",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
  };

  return (
    <div style={{ backgroundColor: "#ffffff", color: "var(--foreground)", fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO SECTION - SHUFFLED DESIGN */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden bg-white"
        style={{ height: "100vh", paddingTop: "90px", position: "relative" }}
      >
        {/* Background Main Image */}
        <img
          src="/images/abt.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "1",
            zIndex: 0
          }}
        />

        {/* Center Text */}
        <div className="relative z-10 text-center">
          <h1
            style={{
              fontSize: "clamp(2rem, 7vw, 6rem)",
              fontWeight: "600",
              color: "#42A147",
            }}
          >
            About Us
          </h1>
        </div>

        {/* Scattered & Bouncing Images - Hidden or scaled on mobile */}
        <img
          src="/images/abt1.png"
          alt=""
          className="animate-float"
          style={{ position: 'absolute', top: "20%", left: "15%", width: "clamp(40px, 8vw, 80px)", zIndex: 5 }}
        />
        <img
          src="/images/abt2.png"
          alt=""
          className="animate-float-delayed"
          style={{ position: 'absolute', top: "15%", right: "20%", width: "clamp(50px, 9vw, 90px)", zIndex: 5 }}
        />
        <img
          src="/images/abt5.png"
          alt=""
          className="animate-float"
          style={{ position: 'absolute', top: "65%", left: "20%", width: "clamp(35px, 7vw, 70px)", zIndex: 5 }}
        />
        <img
          src="/images/abt6.png"
          alt=""
          className="animate-float-delayed"
          style={{ position: 'absolute', top: "70%", right: "15%", width: "clamp(50px, 10vw, 85px)", zIndex: 5 }}
        />
        <img
          src="/images/abt7.png"
          alt=""
          className="animate-float"
          style={{ position: 'absolute', top: "45%", left: "10%", width: "clamp(40px, 8vw, 60px)", zIndex: 5 }}
        />
        <img
          src="/images/abt8.png"
          alt=""
          className="animate-float-delayed"
          style={{ position: 'absolute', top: "50%", right: "10%", width: "clamp(45px, 8vw, 75px)", zIndex: 5 }}
        />
      </section>

      {/* CONTENT SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#ffffff" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#000000", marginBottom: "30px", maxWidth: "1000px", margin: "0 auto 30px" }}>
          "Akshaya Vaahini: A mother’s touch and care, delivered to your doorstep"
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#000000", maxWidth: "1300px", margin: "0 auto", fontWeight: "400", fontFamily: "'Roboto', sans-serif" }}>
          "Akshaya Vaahini is a community-centric food delivery platform designed to transform the culinary talents and unique recipes of homemakers into a secure and steady source of income. Our primary goal is to provide customers with unadulterated, hygienic, and steaming hot home-cooked meals from their own neighborhood. By connecting local 'Culinary Queens' with nearby residents, Akshaya Vaahini ensures a fresh dining experience rooted in the trust of 'pure food from a mother’s hands.'
          Just as a mother nourishes her child with selfless love, she prepares food for her children with that same purity and devotion. We guarantee that the mothers of Akshaya Vaahini will bring that very culture of love and purity to your table."
        </p>
      </section>

      {/* WHY AKSHAYA VAHINI SECTION */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 50px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "50px", fontWeight: "semibold", color: "#42A147", marginBottom: "60px", fontFamily: "'Poppins', sans-serif" }}>
            Why Akshaya Vahini?
          </h2>
          {/* Row 1: 4 Cards */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            maxWidth: "1400px",
            margin: "0 auto 32px"
          }}>
            {[
              { icon: faUtensils, title: "Pure Home Food", desc: "No factory-made meals, only authentic home cooking prepared with love." },
              { icon: faFemale, title: "Women-led Kitchens", desc: "Empowering homemakers through clean and hygienic community kitchens." },
              { icon: faFireAlt, title: "Hot & Fresh", desc: "Enjoy meals that are prepared fresh and served steaming hot to your table." },
              { icon: faTruck, title: "Safe Delivery", desc: "Our reliable delivery partners ensure your food reaches you safely and on time." }
            ].map((card, index) => (
              <div key={index} style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                width: "310px",
                height: "257px",
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#42A147",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0
                }}>
                  <FontAwesomeIcon icon={card.icon} style={{ fontSize: "2rem", color: "#fff" }} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#000", marginBottom: "15px", fontFamily: "'Poppins', sans-serif" }}>{card.title}</h3>
                <p style={{ fontSize: "15px", color: "#000", lineHeight: "1.4", fontFamily: "'Poppins', sans-serif" }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            maxWidth: "1400px",
            margin: "0 auto"
          }}>
            {[
              { icon: faLeaf, title: "Eco-Friendly", desc: "We use reusable or environmentally friendly containers to protect our planet." },
              { icon: faHandHoldingHeart, title: "Trustworthy Service", desc: "Reliable local service rooted in the trust of a mother’s care." }
            ].map((card, index) => (
              <div key={index} style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                width: "310px",
                height: "257px",
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#42A147",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0
                }}>
                  <FontAwesomeIcon icon={card.icon} style={{ fontSize: "2rem", color: "#fff" }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "600", color: "#000", marginBottom: "15px", fontFamily: "'Poppins', sans-serif" }}>{card.title}</h3>
                <p style={{ fontSize: "16px", color: "#000", lineHeight: "1.4", fontFamily: "'Poppins', sans-serif" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 50px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "50px", fontWeight: "semibold", color: "#42A147", marginBottom: "60px", fontFamily: "'Poppins', sans-serif", textAlign: "center" }}>
            Our Advantages
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: "80px", flexWrap: "wrap" }}>
            {/* Left Side: Content */}
            <div style={{ flex: "1", minWidth: "400px" }}>

              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Boosts Productivity: Empowering efficient home-based operations. <br />Strengthens Local Food Systems: Supporting the neighborhood economy. <br />Minimizes Food Waste: Sustainable cooking and conscious consumption. <br />Empowers Women-Led Micro-Businesses: Sustaining family happiness through growth.Promotes Healthy Eating Habits: Bringing nutritious, home-cooked meals back to the table.Sustainable Income for Homemakers: Financial independence and long-term security.
              </p>

            </div>

            {/* Right Side: Stair-step Images (Diagonal, No overlap) */}
            <div style={{ flex: "1", minWidth: "400px", position: "relative", height: "450px" }}>
              <img
                src="/images/adv1.png"
                alt="Advantage 1"
                style={{
                  width: "318px",
                  height: "271px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  zIndex: "1"
                }}
              />
              <img
                src="/images/adv2.png"
                alt="Advantage 2"
                style={{
                  width: "318px",
                  height: "271px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  zIndex: "1"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 50px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "50px", fontWeight: "semibold", color: "#42A147", marginBottom: "60px", fontFamily: "'Poppins', sans-serif", textAlign: "center" }}>
            Our Mission
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: "80px", flexWrap: "wrap" }}>
            {/* Left Side: Photo */}
            <div style={{ flex: "1", minWidth: "400px" }}>
              <img
                src="/images/Abt3.png"
                alt="Our Mission"
                style={{
                  width: "550px",
                  height: "355px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              />
            </div>

            {/* Right Side: Content */}
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
      <section style={{ backgroundColor: "#ffffff", padding: "80px 50px" }}>
        <div style={{ maxWidth: "1500px", margin: "0 auto", display: "flex", gap: "50px", alignItems: "flex-start" }}>

          {/* Left Column: Image (3/4 height) + Green Heading */}
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "30px" }}>
            <img
              src="/images/pic1.png"
              alt="Quality"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            />
            <h2 style={{ fontSize: "66px", fontWeight: "700", color: "#42A147", fontFamily: "'Poppins', sans-serif", margin: "0" }}>
              From Our Kitchen<br /> to Your Heart
            </h2>
          </div>

          {/* Right Column: Image (Full height) */}
          <div style={{ flex: "1" }}>
            <img
              src="/images/pic2.png"
              alt="Process"
              style={{
                width: "100%",
                height: "620px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            />
          </div>

        </div>
      </section>



      {/* OUR SPECIALITY SECTION */}
      <section className="about-section" style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div className="about-inner-container">
          <h2 style={{ fontSize: "50px", fontWeight: "semibold", color: "#42A147", marginBottom: "60px", fontFamily: "'Poppins', sans-serif", textAlign: "center" }}>
            Our Speciality
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-16 gap-x-8">
            <div style={cardStyle}>
              <div style={imageCard}>
                <img src="/images/about1.png" alt="" style={imgStyle} />
              </div>
              <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Ensures food safety and quality.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={imageCard}>
                <img src="/images/about2.png" alt="" style={imgStyle} />
              </div>
              <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Since it is not industrial-scale, say goodbye to stale food; always fresh home-cooked meals.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={imageCard}>
                <img src="/images/about3.png" alt="" style={imgStyle} />
              </div>
              <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Avoid plastics; enjoy safe, hot, home-cooked meals in steel containers.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={imageCard}>
                <img src="/images/about4.png" alt="" style={imgStyle} />
              </div>
              <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Location-based delivery; hot food reaches you in the shortest possible time.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={imageCard}>
                <img src="/images/about5.png" alt="" style={imgStyle} />
              </div>
              <p style={{ fontSize: "18px", color: "black", fontFamily: "'Poppins', sans-serif" }}>
                Reach local customers faster; achieve superior business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* BUSINESS SECTION */}
      <section className="about-section" style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div className="about-inner-container">
          <h2 style={{ fontSize: "50px", fontWeight: "semibold", color: "#42A147", marginBottom: "60px", fontFamily: "'Poppins', sans-serif", textAlign: "center" }}>Business</h2>
          <div className="about-business-flex" style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                flex: "1 1 250px",
                position: "relative",
                padding: 0
              }}
            >
              <img src="/images/pic3.png" alt="" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ flex: "3 1 300px", paddingLeft: "40px" }}>
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