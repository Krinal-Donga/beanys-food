import React from 'react'
import Footer from './Footer'
import Header from '../Navbar/Header'

function ShippingPolicy() {
  return (
    <div style={styles.container}>
    <Header></Header>
      <div style={styles.content}>
        <h1 style={styles.title}>Shipping Policy</h1>

        <p style={styles.lastUpdated}>
          <strong>Beansy Foods LLP – Shipping Policy</strong><br />
          Last Updated: July 30, 2025
        </p>

        <section>
          <h2 style={styles.heading}>1. Order Processing Time</h2>
          <ul style={styles.list}>
            <li>Orders are processed within 1–3 business days (excluding weekends and public holidays).</li>
            <li>Processing time may be extended during peak seasons or due to unforeseen circumstances.</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>2. Shipping Methods & Estimated Delivery</h2>
          <ul style={styles.list}>
            <li><strong>Standard Shipping:</strong> 3–7 business days</li>
            <li><strong>Expedited Shipping:</strong> 2–3 business days (additional charges apply)</li>
            <li><strong>International Shipping:</strong> Delivery time varies by destination and customs clearance</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>3. Shipping Rates</h2>
          <ul style={styles.list}>
            <li>Calculated at checkout based on order weight, size, and destination.</li>
            <li>International orders may be subject to additional customs duties and taxes, payable by the customer.</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>4. Order Tracking & Delays</h2>
          <ul style={styles.list}>
            <li>Tracking details will be sent to your email once your order is shipped.</li>
            <li>Delivery times are estimates and may be affected by carrier delays, weather, or other factors beyond our control.</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>5. Undeliverable Orders</h2>
          <p style={styles.text}>
            If a package is returned due to an incorrect address, refusal, or failed delivery attempts, 
            we will contact you to arrange reshipment (additional shipping fees may apply).
          </p>
        </section>

        <section>
          <h2 style={styles.heading}>6. Contact for Shipping Queries</h2>
          <p style={styles.contact}>📧 beansyfoods@gmail.com</p>
        </section>

      </div>
      <Footer></Footer>
    </div>
    
  )
}

const styles = {
  container: {
    // padding: "60px 20px",
    backgroundColor: "#f4f8f6",
    minHeight: "100vh",
    width:"100vw"
  },
  content: {
    maxWidth: "900px",
    margin: "auto",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    color: "#0c5e48",
    marginBottom: "20px",
    fontSize: "32px",
    paddingTop:"40px"
  },
  lastUpdated: {
    textAlign: "center",
    color: "#666",
    marginBottom: "30px",
    fontSize: "14px",
  },
  heading: {
    marginTop: "30px",
    marginBottom: "10px",
    color: "#0c5e48",
    fontSize: "20px",
  },
  text: {
    color: "#555",
    lineHeight: "1.7",
  },
  list: {
    paddingLeft: "20px",
    color: "#555",
    lineHeight: "1.8",
  },
  contact: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0c5e48",
    marginTop: "10px",
  }
}

export default ShippingPolicy
