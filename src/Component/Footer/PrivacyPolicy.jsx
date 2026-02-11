import React from "react";
import Header from "../Navbar/Header";
import Footer from "./Footer";

function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .privacy-wrapper {
          background: #f4f7f6;
          padding: 60px 20px;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .privacy-container {
          max-width: 1100px;
          margin: auto;
        }

        .privacy-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .privacy-header h1 {
          font-size: 38px;
          font-weight: 700;
          color: #0c5e48;
          margin-bottom: 10px;
        }

        .privacy-header p {
          color: #777;
          font-size: 15px;
        }

        .privacy-card {
          background: #ffffff;
          padding: 50px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          line-height: 1.8;
        }

        .privacy-card h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #0c5e48;
        }

        .privacy-card h3 {
          margin-top: 35px;
          margin-bottom: 15px;
          font-size: 20px;
          color: #222;
          border-left: 4px solid #0c5e48;
          padding-left: 12px;
        }

        .privacy-card h4 {
          margin-top: 20px;
          font-size: 17px;
          color: #444;
        }

        .privacy-card p {
          color: #555;
          margin-bottom: 15px;
          font-size: 15px;
        }

        .privacy-card ul {
          margin-left: 20px;
          margin-bottom: 20px;
        }

        .privacy-card ul li {
          margin-bottom: 8px;
          color: #555;
        }

        .privacy-card a {
          color: #0c5e48;
          font-weight: 500;
          text-decoration: none;
        }

        .privacy-card a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .privacy-card {
            padding: 25px;
          }

          .privacy-header h1 {
            font-size: 28px;
          }
        }
      `}</style>
      <Header></Header>

      <div className="privacy-wrapper" style={{width:'100vw'}}>
        <div className="privacy-container">

          <div className="privacy-header pt-4">
            <h1>Privacy Policy</h1>
            <p>Last Updated: August 10, 2025</p>
          </div>

          <div className="privacy-card">

            <h2>Beansy Foods LLP – Privacy Policy</h2>

            <h3>1. Introduction</h3>
            <p>
              Welcome to <strong>Beansy Foods LLP</strong>. We value your trust and
              are committed to protecting your privacy and safeguarding your personal data.
            </p>
            <p>This Privacy Policy explains:</p>
            <ul>
              <li>What information we collect</li>
              <li>How we use and protect it</li>
              <li>Your rights regarding your data</li>
              <li>How to contact us with privacy concerns</li>
            </ul>

            <h3>2. Scope & Applicability</h3>
            <p>This policy applies to all visitors, customers, and users of:</p>
            <ul>
              <li>Our official website and mobile site</li>
              <li>Online ordering platforms</li>
              <li>Customer support channels</li>
              <li>Offline interactions related to Beansy Foods LLP services</li>
            </ul>

            <h3>3. Information We Collect</h3>

            <h4>A. Information You Provide Voluntarily</h4>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Billing & Shipping Address</li>
              <li>Payment Information (processed securely via third-party gateways)</li>
            </ul>

            <h4>B. Information Collected Automatically</h4>
            <ul>
              <li>IP Address</li>
              <li>Browser Type & Version</li>
              <li>Device Information</li>
              <li>Pages Visited & Time Spent</li>
              <li>Referring URLs</li>
            </ul>

            <h3>4. How We Use Your Information</h3>
            <ul>
              <li>Fulfill and deliver your orders</li>
              <li>Provide customer service</li>
              <li>Personalize your experience</li>
              <li>Improve website performance</li>
              <li>Send promotional updates (with consent)</li>
              <li>Prevent fraud and comply with legal obligations</li>
            </ul>

            <h3>5. Cookies & Tracking Technologies</h3>
            <p>
              We use cookies to remember preferences, keep you logged in,
              analyze traffic, and improve marketing.
            </p>

            <h3>6. Data Sharing & Third-Party Disclosures</h3>
            <p>We do not sell your personal data. We may share with:</p>
            <ul>
              <li>Payment Gateways</li>
              <li>Shipping & Logistics Partners</li>
              <li>Analytics & Marketing Platforms</li>
            </ul>

            <h3>7. Data Security</h3>
            <ul>
              <li>SSL Encryption</li>
              <li>Secure Firewalls</li>
              <li>Limited Access Controls</li>
              <li>Regular Security Audits</li>
            </ul>

            <h3>8. Your Rights</h3>
            <ul>
              <li>Access your data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Opt-out of marketing</li>
            </ul>

            <h3>9. Contact Information</h3>
            <p>
              <strong>Beansy Foods LLP</strong><br />
              Shop No. 319, Abhishek Arcade, Yogi Chowk, Surat, Gujarat – 395010 <br />
              📞 +91 92744 72547 <br />
              📧 <a href="mailto:beansyfoods@gmail.com">beansyfoods@gmail.com</a>
            </p>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PrivacyPolicy;
