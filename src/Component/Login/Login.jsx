import React, { useState } from 'react'
import { useFormik } from 'formik'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth, db } from '../../firebase'
import * as Yup from 'yup'
import './Login.css'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [isSignUp, setIsSignUp] = useState(true)
  const navigate = useNavigate()

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/

  /* ================= SIGN IN ================= */
  const signInFormik = useFormik({
    initialValues: { email: '', pass: '' },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email'),
      pass: Yup.string().required('Password is required')
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.pass)
        navigate('/home')
      } catch (error) {
        alert(error.message)
      }
    }
  })

  /* ================= SIGN UP ================= */
  const signUpFormik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required').email('Invalid email'),
      password: Yup.string()
        .required('Password is required')
        .matches(passwordRegex, 'Password is too weak')
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        )

        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          name: values.name,
          email: values.email,
          createdAt: serverTimestamp()
        })

        setIsSignUp(false)
      } catch (error) {
        alert(error.message)
      }
    }
  })

  return (
    <div className={`main-container ${isSignUp ? 'right-panel-active' : ''}`}>

      {/* ================= SIGN UP ================= */}
      <div className="form-container sign-up">
        <img src="/Greenlogo.png" className="form-logo" alt="Beansy" />
        <form onSubmit={signUpFormik.handleSubmit}>
          <h1>Create Account</h1>

          <div className="field">
            <input
              name="name"
              placeholder="Name"
              value={signUpFormik.values.name}
              onChange={signUpFormik.handleChange}
            />
            <div className="error-slot">
              {signUpFormik.submitCount > 0 && signUpFormik.errors.name}
            </div>
          </div>

          <div className="field">
            <input
              name="email"
              placeholder="Email"
              value={signUpFormik.values.email}
              onChange={signUpFormik.handleChange}
            />
            <div className="error-slot">
              {signUpFormik.submitCount > 0 && signUpFormik.errors.email}
            </div>
          </div>

          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpFormik.values.password}
              onChange={signUpFormik.handleChange}
            />
            <div className="error-slot">
              {signUpFormik.submitCount > 0 && signUpFormik.errors.password}
            </div>
          </div>

          <button className="btn-main" type="submit">Sign Up</button>
        </form>
      </div>

      {/* ================= SIGN IN ================= */}
      <div className="form-container sign-in">
        <img src="/Greenlogo.png" className="form-logo" alt="Beansy" />

        <form onSubmit={signInFormik.handleSubmit}>
          <h1>Sign In</h1>

          <div className="field">
            <input
              name="email"
              placeholder="Email"
              value={signInFormik.values.email}
              onChange={signInFormik.handleChange}
            />
            <div className="error-slot">
              {signInFormik.submitCount > 0 && signInFormik.errors.email}
            </div>
          </div>

          <div className="field">
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={signInFormik.values.pass}
              onChange={signInFormik.handleChange}
            />
            <div className="error-slot">
              {signInFormik.submitCount > 0 && signInFormik.errors.pass}
            </div>
          </div>

          <button className="btn-main" type="submit">Sign In</button>
        </form>
      </div>

      {/* ================= OVERLAY ================= */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img src="/WhiteLogo.png" className="overlay-logo" alt="Beansy" />
            <h1>Welcome Back!</h1>
            <button className="btn-ghost" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <button className="btn-ghost" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
