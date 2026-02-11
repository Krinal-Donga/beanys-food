import React, { useState } from "react";
import "./ContactUs.css";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // path check kar lena

function ContactUs() {

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string()
        .email("Invalid Email")
        .required("Email is Required"),
      message: Yup.string().required("Message is Required")
    }),

    onSubmit: async (values, { resetForm }) => {
      try {

        // 🔥 Firebase me data add
        await addDoc(collection(db, "contactMessages"), {
          name: values.name,
          email: values.email,
          message: values.message,
          createdAt: new Date()
        });

        setSuccessMsg("Message Sent Successfully ✅");
        setErrorMsg("");

        resetForm();

      } catch (error) {
        console.log(error);
        setErrorMsg("Something went wrong ❌");
        setSuccessMsg("");
      }
    }
  });

  return (
    <>
      <Header />

      <div className="contact-page" style={{ width: "100vw" }}>

        {/* Header */}
        <div className="contact-header p-5">
          <h1>Contact Us</h1>
          <p>
            Please use the below form. You can also call customer service on
            +91 92744 72547
          </p>
        </div>

        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-left">
            <h2>Our Contact Details</h2>

            <div className="detail">
              <h4>📍 Address:</h4>
              <p>
                Beansy Foods LLP <br />
                Shop No. 319, Abhishek Arcade, <br />
                Yogi Chowk, Surat, Gujarat – 395010
              </p>
            </div>

            <div className="detail">
              <h4>📧 Email:</h4>
              <p>beansyfoods@gmail.com</p>
            </div>

            <div className="detail">
              <h4>📞 Phone / WhatsApp:</h4>
              <p>+91 92744 72547</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <h2>Contact Us</h2>

            {successMsg && <h4 className="success-msg" style={{color:'green'}}>{successMsg}</h4>}
            {errorMsg && <p className="error-msg" style={{color:'red'}}>{errorMsg}</p>}

            <form className="contact-form" onSubmit={formik.handleSubmit}>

              <div className="input-row">

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="error">{formik.errors.name}</div>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                  )}
                </div>

              </div>

              <div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="error">{formik.errors.message}</div>
                )}
              </div>

              <button type="submit" className="send-btn">
                Send
              </button>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
