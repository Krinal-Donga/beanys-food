import React from 'react'
import './Faqs.css'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'

function Faqs() {
    return (
        <div style={{width:'100vw'}}>
        <div className='faqs container'>
            <Header />
            <h1 className="text-center mb-2 faq-page-title">
                Frequently Asked Questions
            </h1>

            <p className="text-center text-muted mb-5 faq-page-subtitle">
                Everything you need to know about our products, orders, and delivery.
            </p>

            {/* PRODUCT FAQ */}
            <h2 className="faq-title">🛍 Product Information</h2>
            <div className="accordion" id="productFaq">

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#p1">
                            What kind of products do you sell?
                        </button>
                    </h3>
                    <div id="p1" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            We sell healthy, natural and high-quality food products made with carefully selected ingredients.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#p2">
                            Are your products 100% natural?
                        </button>
                    </h3>
                    <div id="p2" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Yes, our products are made without harmful chemicals or artificial preservatives.
                        </div>
                    </div>
                </div>

            </div>

            {/* ORDERS */}
            <h2 className="faq-title">📦 Orders</h2>
            <div className="accordion" id="orderFaq">

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#o1">
                            How can I place an order?
                        </button>
                    </h3>
                    <div id="o1" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            Simply add products to your cart and proceed to checkout.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#o2">
                            Can I cancel my order?
                        </button>
                    </h3>
                    <div id="o2" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            Orders can be cancelled within 24 hours of placing them.
                        </div>
                    </div>
                </div>

            </div>

{/* Payment */}
            <h4 className="faq-title">💳 Payment</h4>

      <div className="accordion mb-4" id="paymentFaq">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pay1"
            >
              What payment methods are available?
            </button>
          </h2>

          <div
            id="pay1"
            className="accordion-collapse collapse show"
            data-bs-parent="#paymentFaq"
          >
            <div className="accordion-body">
              We accept UPI, debit cards, credit cards, and net banking.
            </div>
          </div>
        </div>
      </div>

      {/* Delivery */}
 <h4 className="faq-title">🚚 Delivery</h4>

      <div className="accordion mb-4" id="deliveryFaq">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#d1"
            >
              How long does delivery take?
            </button>
          </h2>

          <div
            id="d1"
            className="accordion-collapse collapse show"
            data-bs-parent="#deliveryFaq"
          >
            <div className="accordion-body">
              Delivery usually takes 3–5 working days depending on your location.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#d2"
            >
              Do you deliver across India?
            </button>
          </h2>

          <div
            id="d2"
            className="accordion-collapse collapse"
            data-bs-parent="#deliveryFaq"
          >
            <div className="accordion-body">
              Yes, we deliver our products across India.
            </div>
          </div>
        </div>
      </div>

            {/* CTA */}
            <div className="text-center mt-5 faq-cta">
                <h4>Still need help?</h4>
                <p>Our support team is always here for you.</p>
                <a href="/contact" className="btn btn-success px-4 py-2">
                    Contact Support
                </a>
            </div>

            <br />
        </div>
            <Footer />
        </div>
    )
}

export default Faqs
