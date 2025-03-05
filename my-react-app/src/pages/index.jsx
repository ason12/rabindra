import React, { useState } from "react";
import "../css/index.css";
import logo from "../images/logo.png"; // Make sure your logo is in this path
import aboutImage from "../images/about.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="full-width">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img
              src={logo}
              alt="Chained Technology Logo"
              className="logo-img"
            />
          </a>

          <div className="mobile-menu" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#strengths">Strength</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about" className="cta-button">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <div className="hero-main">
            <p className="welcome-text">Welcome to</p>
            <h1 className="hero-title">Chained Technology</h1>
            <p className="hero-tagline">
              Empowering Businesses with Cutting-Edge IT
              <br />
              Solutions
            </p>
            <div className="hero-cta">
              <a href="#about" className="btn btn-primary">
                Get Started
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-light about-section">
        <div className="content-wrapper">
          <div className="section-header">
            <span className="section-subtitle">ABOUT US</span>
            <h2>Driving Innovation Through Technology</h2>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutImage} alt="About Chained Technology" />
            </div>
            <div className="about-content">
              <div className="about-text">
                <p className="lead-text">
                  We specialize in delivering cutting-edge IT solutions that
                  transform businesses and drive sustainable growth.
                </p>
                <div className="value-props">
                  <div className="value-item">
                    <div className="value-icon">⚡</div>
                    <div className="value-details">
                      <h4>Innovation First</h4>
                      <p>Pioneering solutions for tomorrow's challenges</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🎯</div>
                    <div className="value-details">
                      <h4>Result Driven</h4>
                      <p>Focused on delivering measurable outcomes</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <div className="value-details">
                      <h4>Client Success</h4>
                      <p>Your growth is our priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="strengths" className="section-light strengths-section">
        <div className="content-wrapper">
          <div className="section-header">
            <span className="section-subtitle">WHY CHOOSE US</span>
            <h2>Our Strengths</h2>
          </div>
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">
                <svg className="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <h3>Experienced Professionals</h3>
              <p>Skilled IT experts with industry experience</p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">
                <svg className="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <h3>Customer-Centric</h3>
              <p>Tailored solutions for your business needs</p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">
                <svg className="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>Reliable assistance anytime, anywhere</p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">
                <svg className="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <h3>Transparency & Security</h3>
              <p>No hidden costs, top-tier privacy protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-light services-section">
        <div className="content-wrapper">
          <div className="section-header">
            <span className="section-subtitle">OUR SERVICES</span>
            <h2>What We Offer</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
              </div>
              <h3>IT Consulting & Solutions</h3>
              <p>Strategic technology planning and implementation</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3>Network & Cyber Security</h3>
              <p>Comprehensive security solutions</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3>Network Management</h3>
              <p>Efficient network infrastructure</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h3>Web & App Development</h3>
              <p>Custom software solutions</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                </svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>Results-driven marketing strategies</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              </div>
              <h3>Surveillance & VMS</h3>
              <p>Advanced security systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-light contact-section">
        <div className="content-wrapper">
          <div className="section-header">
            <span className="section-subtitle">GET IN TOUCH</span>
            <h2>Contact Us Today</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info-panel">
              <h3>Let's Connect</h3>
              <p className="contact-intro">
                Ready to transform your business? Reach out to us for innovative
                IT solutions.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:rabindragauli@gmail.com">
                      rabindragauli@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+9779803243341">+977 980-3243341</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get("name");
                  const email = formData.get("email");
                  const phone = formData.get("phone");
                  const subject = formData.get("subject");
                  const message = formData.get("message");

                  const mailtoLink = `mailto:rabindragauli@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(
                    `Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`
                  )}`;

                  window.location.href = mailtoLink;
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Chained Technology</h3>
            <p className="tagline">🚀 Secure. Connect. Grow.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#consulting">IT Consulting</a>
              </li>
              <li>
                <a href="#security">Cyber Security</a>
              </li>
              <li>
                <a href="#development">Web Development</a>
              </li>
              <li>
                <a href="#marketing">Digital Marketing</a>
              </li>
              <li>
                <a href="#surveillance">Surveillance</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="contact-icon">📍</i> Kathmandu, Nepal
              </p>
              <p>
                <i className="contact-icon">📧</i>{" "}
                <a href="mailto:rabindragauli@gmail.com">
                  rabindragauli@gmail.com
                </a>
              </p>
              <p>
                <i className="contact-icon">📞</i>{" "}
                <a href="tel:+9779803243341">+977 980-3243341</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Chained Technology. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
