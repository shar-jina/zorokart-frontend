"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("story");
  const [activePlate, setActivePlate] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);
  const [isMissionHovered, setIsMissionHovered] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const handleScroll = (e) => {
      const scrollY = window.pageYOffset || 
                      document.documentElement.scrollTop || 
                      document.body.scrollTop || 0;
      
      const scrolling = scrollY > 50;
      setIsScrolling(scrolling);

      if (scrolling) {
        // Subtle half-turn rotation (180 deg) after 50px dead zone
        const rotation = Math.min((scrollY - 50) * 0.3, 180); 
        document.documentElement.style.setProperty('--hero-rotation', `${rotation}deg`);
      } else {
        document.documentElement.style.setProperty('--hero-rotation', '0deg');
      }
    };

    // Use 'true' for the capture phase to catch scrolls on any element
    window.addEventListener("scroll", handleScroll, true);

    const plateInterval = setInterval(() => {
      setActivePlate(prev => (prev === 1 ? 2 : 1));
    }, 4000); // Toggle every 4 seconds

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal, .reveal-rotate");
    revealElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll, true);
      clearInterval(plateInterval);
    };
  }, []);

  const handleSendEmail = (question) => {
    if (!question.trim()) return;
    const subject = encodeURIComponent("Question from Akshayavahini Vendor Page");
    const body = encodeURIComponent(question);
    window.location.href = `mailto:Zorokartindia2025@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="hero-section-wrapper">

        <div className="hero-container-inner">

          <div className="container mx-auto px-6 lg:px-12 relative z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

              {/* LEFT SIDE - TEXT */}
              <div className="py-10 lg:py-0 text-left">
                <h1 className="text-5xl lg:text-[72px] font-[900] text-slate-900 leading-[1] mb-10 tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  The taste of mother's cooking, <br />
                  right at your doorstep
                </h1>
                <p className="text-black text-xl lg:text-2xl mb-12 max-w-xl leading-relaxed font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px' }}>
                  Experience the authentic taste of home with fresh, wholesome meals prepared by trusted neighbors in your community
                </p>

                <div className="mb-6 flex items-center bg-[#f0f2f5] rounded-20px p-2 max-w-xl border border-brand-green">
                  <input
                    type="text"
                    placeholder="Enter you email here"
                    className="flex-1 bg-transparent px-8 py-3.5 outline-none text-xl text-slate-700 placeholder:text-slate-500"
                    style={{ border: 'none', outline: 'none', fontFamily: "'Poppins', sans-serif" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        router.push(email ? `/register?email=${email}` : '/register');
                      }

                    }}

                  />
                  <Link href={email ? `/register?email=${email}` : "/register"} style={{ textDecoration: 'none' }}>
                    <button 
                      className="bg-[#42A147] text-white font-bold py-3.5 px-14 rounded-10px hover:bg-green-700 transition-all text-xl" 
                      style={{ backgroundColor: '#42A147', fontFamily: "'Poppins', sans-serif" }}
                    >
                      Register
                    </button>
                  </Link>




                </div>

                <div className="flex flex-col mt-10">
                  <p className="text-black font-regular text-xl mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Trusted by</p>
                  <div className="flex items-center gap-4" >
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden relative">
                        <img src="/images/Ellipse2.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden relative">
                        <img src="/images/Ellipse4.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden relative">
                        <img src="/images/Ellipse5.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-brand-green font-black text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>100+ users</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PLATE & ANIMATIONS (STABLE POSITIONING) */}
        <div className="hidden lg:block" style={{
          position: 'absolute',
          right: '-20%',
          top: '58%',
          transform: 'translateY(-50%)',
          width: 'min(900px, 50vw)',
          aspectRatio: '1/1',
          zIndex: 30
        }}>
          {/* Inner Wrapper (Stationary) */}
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}>

          {/* Dotted Circle Path (Nudged up for alignment) */}
          <div style={{
            position: 'absolute',
            inset: '-5%',
            top: '-15%',
            border: '2px dashed rgba(19, 19, 19, 0.2)',
            borderRadius: '50%',
            transform: 'scale(1.05)',
            zIndex: 1
          }}></div>

          {/* High-Res Plates (Animated Stack) */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 2
          }}>
            <img
              src="/images/hero.png"
              alt="Healthy Food Plate"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                opacity: isScrolling ? 1 : (activePlate === 1 ? 1 : 0),
                transform: (isScrolling || activePlate === 1 ? 'scale(1) translateX(0)' : 'scale(0.5) translateX(100%)') + ' rotate(var(--hero-rotation, 0deg))',
                // Instant transition when scrolling, smooth fade when auto-toggling
                transition: isScrolling ? 'opacity 0.1s linear, transform 0.1s ease-out' : 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            <img
              src="/images/hero2.png"
              alt="Delicious Meal Plate"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                opacity: isScrolling ? 0 : (activePlate === 2 ? 1 : 0),
                transform: (isScrolling ? 'scale(0.5) translateX(100%)' : (activePlate === 2 ? 'scale(1) translateX(0)' : 'scale(0.5) translateX(100%)')),
                // Instant transition when scrolling, smooth fade when auto-toggling
                transition: isScrolling ? 'opacity 0.1s linear, transform 0.1s ease-out' : 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>

          {/* High-Def Orbiting Vegetables (Nudged up to match circle) */}
          <div style={{ position: 'absolute', top: '16%', right: '96%', width: '140px', height: '140px', zIndex: 3 }}>
            <img src="/images/Vector2.png" alt="Onion" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(15deg)' }} />
          </div>

          <div style={{ position: 'absolute', top: '38%', right: '95%', width: '180px', height: '180px', zIndex: 3 }}>
            <img src="/images/Vector3.png" alt="Broccoli" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(-10deg)' }} />
          </div>

          <div style={{ position: 'absolute', bottom: '18%', right: '92%', width: '120px', height: '120px', zIndex: 3 }}>
            <img src="/images/Vector4.png" alt="Tomato" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(45deg)' }} />
          </div>

          <div style={{ position: 'absolute', bottom: '-2%', left: '10%', width: '140px', height: '140px', zIndex: 3 }}>
            <img src="/images/Vector5.png" alt="Lettuce" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(-15deg)' }} />
          </div>

          <div style={{ position: 'absolute', top: '-8%', left: '-3%', width: '150px', height: '150px', zIndex: 3 }}>
            <img src="/images/Vector7.png" alt="Carrot" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(30deg)' }} />
          </div>

          <div style={{ position: 'absolute', bottom: '-16%', left: '33%', width: '150px', height: '150px', zIndex: 3 }}>
            <img src="/images/Vector6.png" alt="Beetroot" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(30deg)' }} />
          </div>

          </div>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      {/* ABOUT US - FORCED GREEN BACKGROUND */}
      <section id="about" style={{ backgroundColor: '#42A147' }} className="py-32 text-center text-white relative z-30 reveal">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-bold mb-12" style={{ fontSize: '45px', fontFamily: "'Poppins', sans-serif", fontSize: "50px" }}>About us</h2>
          <p className="text-white mb-16 max-w-6xl px-10 py-10 text-justify" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px' }}>
            Akshayavahini is a community-driven food delivery platform that empowers homemakers by turning their cooking skills into a steady income. We focus on delivering pure, hygienic, and steaming-hot home food right from your neighborhood. By bridging the gap between local 'Cooking Queens' and customers, Akshayavahini delivers a fresh experience with every meal —crafted with the love of a mother's hands
          </p>
          <Link href="/About" className="btn-bounce" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <span
              className="m-0 border border-white px-10 py-5 rounded-full text-white flex items-center gap-6" 
              style={{ 
                display: 'flex',
                fontFamily: "'Poppins', sans-serif", 
                backgroundColor: 'transparent',
                background: 'transparent',
                color: 'white',
                fontWeight: '900', 
                border: '1px solid white',
                cursor: 'pointer',
                transition: 'none',
                WebkitTapHighlightColor: 'transparent',
                whiteSpace: 'nowrap'
              }}

            >
              Read more about us &gt;
            </span>
          </Link>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      {/* RESTORED BOTTOM SECTIONS */}
      <section className="py-32 px-6 lg:px-24 text-center reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className=" font-bold text-brand-green mb-16 uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "50px" }}>Mission</h2>
          <div className="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl border-[12px] border-white mx-auto" style={{ maxWidth: '610px' }}>
            <Image src="/images/Abt3.png" alt="Mission" width={610} height={300} className="w-full object-cover" />
          </div>
          <p className="text-black py-10 px-12 text-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px' }}>
            Our primary mission is to serve as a transformative force for homemakers navigating financial hardships. We aim to provide them with a sustainable "helping hand" by creating opportunities that translate their culinary skills into economic stability and long-term security. Simultaneously, we are deeply committed to our customers, ensuring that every meal we serve is a testament to purity, warmth, and the incomparable taste of home, prepared with genuine love and care.
          </p>
          <div className="flex justify-center">
            <Link href="/About" className="btn-bounce" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <span
                className="m-0 border border-black px-10 py-5 rounded-full text-black flex items-center gap-6" 
                style={{ 
                  display: 'flex',
                  fontFamily: "'Poppins', sans-serif", 
                  backgroundColor: 'transparent',
                  background: 'transparent',
                  color: 'black',
                  fontWeight: '500', 
                  border: '1px solid black',
                  cursor: 'pointer',
                  transition: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  whiteSpace: 'nowrap'
                }}

              >
                Read more about us &gt;
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      <section className="pt-16 pb-32 px-6 lg:px-24 bg-white reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="lg:hidden font-bold text-brand-green mb-8 uppercase tracking-widest text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "50px" }}>What Makes us Special</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">


            {/* LEFT SIDE - IMAGE */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white" style={{ flex: "1" }}>
              <Image src="/images/Web5.png" alt="Features" width={500} height={400} className="w-full object-cover aspect-[4/3]" />
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="text-left flex-1 lg:flex-[2]">
              <h2 className="hidden lg:block font-bold text-brand-green mb-8 uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "50px" }}>What Makes us Special</h2>

              <h3 className="text-black text-3xl font-semibold mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px" }}>Ensuring food safety and quality.</h3>
              <p className="text-black mb-12 text-xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>
                No frozen or stale food. Everything is prepared fresh in a homemaker’s kitchen, not in an industrial factory Prepared in hygienic home kitchens and delivered in high-quality, food-grade or stainless steel containers, our meals stay hot and safe. This eco-friendly and sustainable approach eliminates plastic usage and prevents food contamination, ensuring a healthier choice for you and the planet
              </p>
              <Link href="/Vision" className="btn-bounce" style={{ textDecoration: 'none', display: 'inline-block' }}>
                <span
                  className="m-0 border border-black px-10 py-5 rounded-full text-black flex items-center gap-6" 
                  style={{ 
                    display: 'flex',
                    fontFamily: "'Poppins', sans-serif", 
                    backgroundColor: 'transparent',
                    background: 'transparent',
                    color: 'black',
                    fontWeight: '500', 
                    border: '1px solid black',
                    cursor: 'pointer',
                    transition: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    whiteSpace: 'nowrap'
                  }}

                >
                  Explore Our Vision &gt;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      <section className="pt-16 pb-32 px-6 lg:px-24 bg-white reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-brand-green mb-20 text-center uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "50px" }}>Get to know us</h2>

          <div className="get-to-know-us-grid">

            {/* 1st DIV - BUTTONS */}
            <div className="flex flex-col gap-4 pt-10">
              <button
                onClick={() => setActiveTab("story")}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  width: '100%',
                  maxWidth: '240px',
                  padding: '20px 32px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  userSelect: 'none',
                  backgroundColor: activeTab === "story" ? "#BDEACD" : "transparent",
                  color: "#42A147", // Brand Green
                  transform: activeTab === "story" ? "scale(1.05)" : "scale(1)",
                  whiteSpace: 'nowrap'
                }}
              >
                Benefits {activeTab === "story" && "→"}
              </button>
              <button
                onClick={() => setActiveTab("values")}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  width: '100%',
                  maxWidth: '240px',
                  padding: '20px 32px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  userSelect: 'none',
                  backgroundColor: activeTab === "values" ? "#BDEACD" : "transparent",
                  color: "#42A147", // Brand Green
                  transform: activeTab === "values" ? "scale(1.05)" : "scale(1)",
                  whiteSpace: 'nowrap'
                }}
              >
                Our Values {activeTab === "values" && "→"}
              </button>
            </div>

            {/* 2nd DIV - DYNAMIC BULLET TEXT */}
            <div className="bg-white p-10 rounded-[40px] min-h-[350px]">
              {activeTab === "story" ? (
                <>
                  <h3 className="text-black text-3xl font-semibold mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px" }}>Increases productivity</h3>
                  <ul className="space-y-6 text-xl font-regular text-black" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px" }}>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      Promoting sustainable income for homemakers and fostering healthy eating habits.
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      Empowering the local food ecosystem
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      Reduces food waste
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      Empowering women-led micro-businesses to grow while sustaining the joy and well-being of their families
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-black text-3xl font-semibold mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px" }}>A commision-based platform</h3>
                  <ul className="space-y-6 text-xl font-regular text-black" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px" }}>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      Daily/Weekly payment system.
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      A dashboard for transparent tracking of your earnings.
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-brand-green font-black mt-1">●</span>
                      Genuine support to achieve maximum growth through low-cost promotions
                    </li>
                  </ul>
                </>
              )}

              <div className="flex justify-start mt-16">
                <Link href="/KnowMore" className="btn-bounce" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  <span
                    className="m-0 border border-black px-20 py-5 rounded-full text-black flex items-center gap-6" 
                    style={{ 
                      display: 'flex',
                      fontFamily: "'Poppins', sans-serif", 
                      backgroundColor: 'transparent',
                      background: 'transparent',
                      color: 'black',
                      fontWeight: '500', 
                      border: '1px solid black',
                      cursor: 'pointer',
                      transition: 'none',
                      WebkitTapHighlightColor: 'transparent',
                      whiteSpace: 'nowrap'
                    }}

                  >
                    Read more &gt;
                  </span>
                </Link>
              </div>
            </div>

            {/* 3rd DIV - IMAGE */}
            <div className="relative rounded-[40px] overflow-hidden shadow-xl border-[8px] border-white min-h-[500px]" style={{ height: '400px' }}>
              <Image src="/images/Web6.png" alt="Get to know us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      <section id="how-to-register" className="pt-16 pb-32 px-6 lg:px-24 relative overflow-hidden bg-white reveal">

        {/* Programmatic Background Decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-[600px]" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-50px' }}>
            <path
              d="M-50,200 C150,0 450,400 720,200 C990,0 1290,400 1490,200"
              stroke="#42A147"
              strokeWidth="3"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className=" font-bold text-brand-green mb-12 text-center uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "50px" }}>How to register</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[40px] overflow-hidden border-2 border-brand-green shadow-xl bg-white" style={{ borderRadius: '40px' }}>
            {/* STEP 1 */}
            <div className="step-card p-12 lg:p-16 text-left flex flex-col justify-between items-start min-h-[450px] h-full">
              <div>
                <div className="text-brand-green font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Step 01</div>
                <div className="w-24 h-24 mb-8 self-start flex items-center">
                  <Image src="/images/RCT1.png" alt="Select Role" width={35} height={35} style={{ width: '35px', height: '35px' }} className="object-contain" />
                </div>
                <p className="text-slate-900 text-lg leading-relaxed font-medium pr-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Please select whether you are a Registered Vendor or applying through an Agent
                </p>
              </div>
              <Link href="/register" className="w-full mt-10 p-3 rounded-10px bg-white border-2 border-brand-green text-brand-green font-normal hover:bg-brand-green hover:text-white transition-all flex items-center justify-center no-underline" style={{ fontFamily: "'Poppins', sans-serif", textDecoration: 'none', fontSize: '20px', fontWeight: '400' }}>
                Start
              </Link>
            </div>

            {/* STEP 2 */}
            <div className="step-card p-12 lg:p-16 border-t md:border-t-0 md:border-l border-brand-green text-left flex flex-col justify-between items-start min-h-[450px] h-full">
              <div>
                <div className="text-brand-green font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Step 02</div>
                <div className="w-24 h-24 mb-8 self-start flex items-center">
                  <Image src="/images/RCT2.png" alt="Payment Method" width={35} height={35} style={{ width: '35px', height: '35px' }} className="object-contain" />
                </div>
                <p className="text-slate-900 text-lg leading-relaxed font-medium pr-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Select Your Preferred Payment Method
                </p>
              </div>
              <Link href="/register" className="w-full mt-10 p-3 rounded-10px bg-white border-2 border-brand-green text-brand-green font-normal hover:bg-brand-green hover:text-white transition-all flex items-center justify-center no-underline" style={{ fontFamily: "'Poppins', sans-serif", textDecoration: 'none', fontSize: '20px', fontWeight: '400' }}>
                Choose
              </Link>
            </div>

            {/* STEP 3 - HIGHLIGHTED */}
            <div className="step-card p-12 lg:p-16 border-t md:border-t-0 md:border-l border-brand-green bg-brand-green text-white text-left flex flex-col justify-between items-start min-h-[450px] h-full">
              <div>
                <div className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Step 03</div>
                <div className="w-24 h-24 mb-8 self-start flex items-center">
                  <Image src="/images/RCT3.png" alt="Success" width={35} height={35} style={{ width: '35px', height: '35px' }} className="object-contain brightness-0 invert" />
                </div>
                <p className="text-white text-lg leading-relaxed font-medium pr-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Please look forward to a WhatsApp message containing your invoice details
                </p>
              </div>
              <Link href="/register" className="w-full mt-10 p-3 rounded-10px bg-white border-2 border-brand-green text-brand-green font-normal hover:bg-brand-green hover:text-white transition-all flex items-center justify-center no-underline" style={{ fontFamily: "'Poppins', sans-serif", textDecoration: 'none', fontSize: '20px', fontWeight: '400' }}>
                Check
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      {/* NEW PAYMENT SECTION */}
      <section id="payment-section" className="w-full bg-brand-green text-white" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-48 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>Complete your payment</h2>
          <p className="text-xl text-white font-regular mb-20 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px" }}>
            Just pay a small fee, and once it's done, an invoice will be sent <br /> directly to your WhatsApp. No waiting, no confusion!
          </p>

          <div className="flex flex-row justify-center mb-20 flex-wrap" style={{ gap: '100px' }}>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-8 flex items-center justify-center reveal-rotate">
                <Image src="/images/sec1.png" alt="Secure" width={35} height={35} style={{ width: '35px', height: '35px' }} className="object-contain brightness-0 invert" />
              </div>
              <p className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', fontWeight: '400' }}>Safe & Secure Payments</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-8 flex items-center justify-center reveal-rotate">
                <Image src="/images/sec2.png" alt="Quick" width={35} height={35} style={{ width: '35px', height: '35px' }} className="object-contain brightness-0 invert" />
              </div>
              <p className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', fontWeight: '400' }}>Your Data is Private</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-8 flex items-center justify-center reveal-rotate">
                <Image src="/images/sec3.png" alt="Trusted" width={35} height={35} style={{ width: '35px', height: '35px' }} className="object-contain brightness-0 invert" />
              </div>
              <p className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', fontWeight: '400' }}>Instant Digital Receipt</p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-10 mt-12">
            <Link href="/register" className="bg-white text-brand-green px-32 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center no-underline" style={{ fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}>
              Pay Now
            </Link>
            <button className="px-6 md:px-8 py-3 md:py-4 text-white font-normal text-lg md:text-xl hover:opacity-80 transition-all border-none bg-transparent whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
              View Receipt
            </button>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      {/* WHY US SECTION - REDESIGNED TO MATCH MISSION SECTION */}
      <section id="why-us" className="py-32 px-6 lg:px-24 text-center reveal" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-brand-green mb-16 uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '50px' }}>Why Us</h2>
          <div className="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl border-[12px] border-white mx-auto aspect-video" style={{ maxWidth: '500px', height: "400px" }}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/OnDolQCnhSk"
              title="Why Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-black font-regular py-10 px-10 lg:px-32 text-xl leading-relaxed text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>
            Not Factory-Made, Only Home-Cooked: Authentic, high-quality traditional dishes made just for you.
            Women-Led, Pristine Kitchens: Prepared by homemakers in highly hygienic and clean home environments.
            Fresh and Hot: Every meal is prepared fresh upon order and delivered steaming hot to your doorstep.
            Safe & Eco-Friendly Delivery: Delivered in sustainable, plastic-free, or reusable containers to protect both your health and the environment.
            Reliable Local Service: Trustworthy service from the homemakers in your own neighborhood.
            Infused with a Mother's Love: More than just a meal; it is a service built on the care, love, and trust of a mother.
          </p>
        </div>

      </section>
      <div className="w-full h-px bg-black opacity-5"></div>
      {/* QUESTIONS SECTION */}
      <section id="questions" className="pt-16 pb-32 px-6 lg:px-24 bg-white reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-red-600 font-bold text-center pt-10 pb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '50px' }}>Questions?</h1>
            <p className="text-xl text-black font-medium mb-6 " style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px' }}>Everything you need to know about becoming a vendor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
            {/* ROW 1 */}
            <div className="pb-16" style={{ paddingRight: '80px', borderRight: '2px solid #000000', fontFamily: "'Poppins', sans-serif" }}>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>What's the registration fee?</h3>
              <p className="text-lg text-black leading-relaxed font-medium " style={{ fontFamily: "'Poppins', sans-serif" }}>
                There's a small fee to get started. Once you pay, your invoice goes straight to your WhatsApp. No hidden costs, no surprises
              </p>
              <div className="mt-12 mx-auto md:mx-0" style={{ borderBottom: '2px solid #000000', width: '200px' }}></div>
            </div>

            <div className="pb-16" style={{ paddingLeft: '80px', fontFamily: "'Poppins', sans-serif" }}>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>When can I start selling?</h3>
              <p className="text-lg text-black leading-relaxed font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                After registration and payment are complete, you're in. Customers will find you and orders will come. Start cooking.
              </p>
              <div className="mt-12 mx-auto md:mx-0" style={{ borderBottom: '2px solid #000000', width: '200px' }}></div>
            </div>

            {/* ROW 2 */}
            <div className="pt-8" style={{ paddingRight: '80px', borderRight: '2px solid #000000', fontFamily: "'Poppins', sans-serif" }}>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>How do I get paid?</h3>
              <p className="text-lg text-black leading-relaxed font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                You keep the money from every order. No middleman taking a cut. Direct payment for your work.
              </p>
            </div>

            <div className="pt-8" style={{ paddingLeft: '80px', fontFamily: "'Poppins', sans-serif" }}>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Can I upload a video later?</h3>
              <p className="text-lg text-black leading-relaxed font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Upload it during registration. Show us what you cook best. That video is how customers get to know you.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="mt-20 text-left">
            <h3 className="text-3xl font-bold text-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Still have questions?</h3>
            <p className="text-xl text-black mb-4 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Reach out to us anytime.</p>

            <div className="flex flex-row gap-4 max-w-xl">
              <input
                type="text"
                placeholder="Ask your Question here"
                className="flex-1 bg-[#f9f9f9] border-2 border-black rounded-2xl px-10 py-6 h-16 text-xl outline-none focus:border-brand-green transition-all shadow-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
              <button className="bg-brand-green text-white w-16 h-16 rounded-2xl flex items-center justify-center hover:bg-green-700 transition-all shadow-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <FontAwesomeIcon icon={faPaperPlane} className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
