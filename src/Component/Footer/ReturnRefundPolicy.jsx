import React from 'react'
import Header from '../Navbar/Header'
import Footer from './Footer'

function ReturnRefundPolicy() {
  return (
    <div style={styles.container}>
    <Header></Header>
      <div style={styles.content}>
        <h1 style={styles.title}>Return & Refund Policy</h1>

        <p style={styles.lastUpdated}>
          <strong>Beansy Foods LLP – Return & Refund Policy</strong><br />
          Last Updated: August 12, 2025
        </p>

        <section>
          <h2 style={styles.heading}>Return Eligibility</h2>
          <ul style={styles.list}>
            <li>We offer a 30-day return policy from the date of delivery.</li>
            <li>Items must be unused, in their original packaging, and in the same condition as received.</li>
            <li>Proof of purchase (receipt or order confirmation) is required.</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>How to Initiate a Return</h2>
          <ul style={styles.list}>
            <li>Email your return request to <strong>beansy@gmail.com</strong> before sending the product.</li>
            <li>Once approved, we will provide a return shipping label and instructions.</li>
            <li>Returns sent without prior approval will not be accepted.</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>Damaged or Incorrect Items</h2>
          <p style={styles.text}>
            Inspect your order upon delivery. Contact us immediately if you receive a
            damaged, defective, or incorrect item so we can resolve the issue promptly.
          </p>
        </section>

        <section>
          <h2 style={styles.heading}>Exchange Policy</h2>
          <p style={styles.text}>
            The quickest way to get a replacement is to return the original item and
            place a new order after return approval.
          </p>
        </section>

        <section>
          <h2 style={styles.heading}>Refund Process</h2>
          <ul style={styles.list}>
            <li>We will inspect your return upon receipt.</li>
            <li>If approved, a refund will be processed to your original payment method within 10 business days.</li>
            <li>Processing times may vary depending on your bank or card provider.</li>
            <li>
              If you haven’t received your refund within 15 business days of approval,
              contact <strong>beansyfoods@gmail.com</strong>.
            </li>
          </ul>
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
  }
}

export default ReturnRefundPolicy
