import React, { useEffect, useState } from 'react'
import '../Footer/Footer.css'
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

function Footer() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const snap = await getDocs(collection(db, "products"));

      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProduct(data);
    }
    fetchProduct();
  }, [])
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row gy-4">

            {/* Left */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                src="../images/WhiteLogo.png"
                alt="Beansy Foods Logo"
                className="footer-logo"
              />

              <h3 className="mt-3">Get in touch</h3>

              <p className="footer-text">
                Crafting comfort with freshness — Beansy Foods makes every meal feel like home.
              </p>

              <p>
                <i className="fa-solid fa-phone"></i> +91 92744 72547
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> beansyfoods@gmail.com
              </p>

              <div className="social-icons">
                <a href="https://www.facebook.com/beansyfoods/?rdid=KcrWrhr69sRsaLxp" target='blank' aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/beansyfoods" target='blank' aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://wa.me/6355008330?text=Hello,%20I%20have%20a%20query." target='blank' aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Products</h5>
              {/* <ul>
              <li>Shop All</li>
              <li>Creamy Coconut Beans</li>
              <li>Mix Boiled Beans</li>
              <li>Spicy Peri Peri Beans</li>
              <li>Tangy Sweet Chilli Beans</li>
              <li>Zesty Mint Coriander Beans</li>
            </ul> */}
              <ul className="footer-links">
                {products.filter(item => item.iscombo === false).map(p => (
                  <li key={p.id}>
                    <Link to={`/productdtl/${p.id}`}>
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h5>Quick links</h5>
              <ul className="footer-link">
                <Link to='/about' ><li>About Us</li></Link>
                <Link  to='/privacy'><li>Privacy Policy</li></Link>
                <Link  to='/terms'><li>Terms & Conditions</li></Link>
                 <Link  to='/shiping'><li>Shipping Policy</li></Link>
               <Link to='/return'> <li>Return & Refund Policy</li> </Link>
                <Link to='/contctUs'><li>Contact Us</li></Link>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Get started</h5>
              <p>
                Sign up for exclusive deals, early access to new products, and updates from our community.
              </p>

              <div className="newsletter">
                <input
                  type="email"
                  placeholder="Enter your email..."
                />
                <button>Sign Up</button>
              </div>
            </div>

          </div>

          <hr className="footer-line" />

          <p className="text-center small">
            © 2026 Beansy Foods. All Rights Reserved.
          </p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
