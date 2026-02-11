import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'

function TermsConditions() {
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

        .privacy-card h3 {
          margin-top: 35px;
          margin-bottom: 15px;
          font-size: 20px;
          color: #222;
          border-left: 4px solid #0c5e48;
          padding-left: 12px;
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

      <Header />

      <div className="privacy-wrapper" style={{ width: '100vw' }}>
        <div className="privacy-container">

          <div className="privacy-header pt-4">
            <h1>Terms and Conditions</h1>
            <h3>Beansy Foods LLP – Terms & Conditions</h3>
            <p>Last Updated: August 12, 2025</p>
          </div>

          <div className="privacy-card">

            <h3>4. Orders & Payment</h3>
            <ul>
              <li>Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order.</li>
              <li>Payments must be made through accepted payment methods at checkout.</li>
              <li>Prices are inclusive of applicable taxes unless stated otherwise.</li>
            </ul>

            <h3>5. Shipping & Delivery</h3>
            <ul>
              <li>Shipping times are estimates and may vary based on location, carrier delays, or unforeseen events.</li>
              <li>Risk of loss passes to you upon delivery to the shipping address provided.</li>
              <li>Please refer to our Shipping Policy for detailed terms.</li>
            </ul>

            <h3>6. Returns & Refunds</h3>
            <p>
              Due to the perishable nature of our products, returns are accepted only if the item is defective, damaged, or incorrect upon delivery.
            </p>
            <p>
              All return requests must follow our Return & Refund Policy.
            </p>

            <h3>7. Use of Website</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the site for unlawful purposes</li>
              <li>Attempt to hack, disrupt, or interfere with our systems</li>
              <li>Copy or reproduce website content without permission</li>
              <li>Post false, misleading, or harmful information</li>
            </ul>

            <h3>8. Intellectual Property</h3>
            <p>
              All content on our website, including images, text, graphics, and logos, is owned by Beansy Foods LLP or its licensors.
            </p>
            <p>
              You may not use, copy, or reproduce our content without prior written consent.
            </p>

            <h3>9. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Beansy Foods LLP is not liable for indirect, incidental, or consequential damages arising from the use of our products or services.
            </p>
            <p>
              Our liability is limited to the purchase price of the product in question.
            </p>

            <h3>10. Health Disclaimer</h3>
            <p>
              Our products are made with natural ingredients and are preservative-free, but individuals with allergies or dietary restrictions should review ingredient lists carefully before consumption.
            </p>
            <p>
              We are not responsible for adverse reactions due to ingredient sensitivities.
            </p>

            <h3>11. Indemnification</h3>
            <p>
              You agree to indemnify and hold Beansy Foods LLP harmless from any claims, damages, or expenses resulting from your violation of these Terms or misuse of our products/services.
            </p>

            <h3>12. Governing Law & Dispute Resolution</h3>
            <p>
              These Terms are governed by the laws of India.
            </p>
            <p>
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat.
            </p>

            <h3>13. Changes to Terms</h3>
            <p>
              We may update these Terms at any time. Changes will be posted on this page with the updated date.
              Continued use of our services after changes implies acceptance of the updated Terms.
            </p>

            <h3>14. Contact Information</h3>
            <p>
              <strong>Beansy Foods LLP</strong><br />
              Shop No. 319, Abhishek Arcade, In Front of KBC-2, Park View Road, Yogi Chowk, Surat, Gujarat – 395010 <br />
              📞 +91 92744 72547 <br />
              📧 <a href="mailto:beansyfoods@gmail.com">beansyfoods@gmail.com</a>
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TermsConditions
