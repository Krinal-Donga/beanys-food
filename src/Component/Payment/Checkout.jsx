import React, { useState } from "react";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

function Checkout() {

    // ================= STATE =================
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: ""
    });

    const [paymentMethod, setPaymentMethod] = useState("razorpay");
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    // ================= FUNCTIONS =================

    // Input Change Handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Payment Change
    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    const saveOrder = async (method, status, paymentId = "") => {
        try {
            await addDoc(collection(db, "orders"), {
                customer: formData,
                item: cartItems,
                total: cartItems.reduce((a, b) => a + b.price * b.qty, 0),
                paymentMethod: method,
                paymentStatus: status,
                paymentId: paymentId,
                createdAt: serverTimestamp(),
            });
        } catch (ex) {
            alert(ex);
        }
    }

    // Submit Function
    const handleSubmit = async () => {
        if (!formData.email || !formData.firstName || !formData.address) {
            alert("Please fill required fields!");
            return;
        }
        const totalamount = cartItems.reduce(
            (a, b) => a + b.price * b.qty, 0
        );
        if (paymentMethod == "cod") {
            await saveOrder("Cod", "pending");
            alert("Order Placed Successfully (COD)");
            return;
        }

        const options = {
            key: "rzp_test_SFVrl2tJ5jNBs6",
            amount: totalamount * 100,
            currency: "INR",
            name: "Beansy Food",
            description: "Food Order Payment",

            handler: async function (response) {
                console.log(response);

                await saveOrder(
                    "Razorpay",
                    "paid",
                    response.razorpay_payment_id
                );

                alert("Payment Successful!");
            },
 method: {
    upi: true,
    card: true,
    netbanking: true,
    wallet: true
  },
            prefill: {
                name: formData.firstName + " " + formData.lastName,
                email: formData.email,
                contact: formData.phone,
            },

            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
            console.log(response);
            alert("Payment Failed!");
        });

        rzp.open();

    };

    // ================= UI =================

    return (
        <div className="bf-checkout-container">

            {/* LEFT SIDE */}
            <div className="bf-checkout-left">
                <h2 className="bf-checkout-logo">Beancy Foods</h2>

                <div className="bf-section">
                    <h3>Contact</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email or mobile phone number"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="bf-section">
                    <h3>Delivery</h3>

                    <div className="bf-row">
                        <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
                    </div>

                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

                    <div className="bf-row">
                        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                        <input type="text" name="pin" placeholder="PIN code" value={formData.pin} onChange={handleChange} />
                    </div>

                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="bf-section">
                    <h3>Payment</h3>

                    <div
                        className={`bf-payment-box ${paymentMethod === "razorpay" ? "active" : ""}`}
                        onClick={() => handlePaymentChange("razorpay")}
                    >
                        <input type="radio" checked={paymentMethod === "razorpay"} readOnly />
                        <label>Razorpay (UPI, Cards, Wallets)</label>
                    </div>

                    <div
                        className={`bf-payment-box ${paymentMethod === "cod" ? "active" : ""}`}
                        onClick={() => handlePaymentChange("cod")}
                    >
                        <input type="radio" checked={paymentMethod === "cod"} readOnly />
                        <label>Cash on Delivery (COD)</label>
                    </div>
                </div>

                <button className="bf-pay-btn" onClick={handleSubmit}>
                    Pay Now
                </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="bf-checkout-right">
                <div className="bf-summary">
                    <div className="bf-product-infos">
                        {cartItems.map((item) => (
                            <div className="bf-product-row" key={item.docId}>
                                <div className="bf-image-box">
                                    <img src={item.image} alt="" />
                                    <span className="bf-qty-badge">{item.qty}</span>
                                </div>

                                <div className="bf-product-name">
                                    {item.title}
                                </div>

                                <div className="bf-product-price">
                                    ₹{item.price}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bf-subtotal-row">
                        <span>Subtotal · {cartItems.reduce((a, b) => a + b.qty, 0)} items</span>
                        <span>₹{cartItems.reduce((a, b) => a + (b.price * b.qty), 0)}</span>
                    </div>

                    <div className="bf-final-total">
                        <span>Total</span>
                        <span>₹{cartItems.reduce((a, b) => a + (b.price * b.qty), 0)}</span>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Checkout;
