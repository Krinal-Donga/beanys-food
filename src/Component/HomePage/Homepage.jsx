import React, { useEffect, useState,useRef } from 'react'
import Header from '../Navbar/Header'
import '../HomePage/Homepage.css'
import Footer from '../Footer/Footer'
import useScrollReveal from '../HomePage/Hooks/useScrollReveal'
import { Row, Col, Container } from 'react-bootstrap';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { addtocart } from '../Services/cartService'
import { fetchCart, openCart } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const RatingStars = ({ rating = 5 }) => (
  <div className="rating">
    {[1, 2, 3, 4, 5].map(i => (
      <i
        key={i}
        className={`bi ${rating >= i ? 'bi-star-fill' : 'bi-star'}`}
      />
    ))}
  </div>
);


function Homepage() {
  const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const HandleAddtoCart = async (item) => {
      await addtocart(item);
      dispatch(fetchCart());
      dispatch(openCart()); // 🔥 SIDEBAR OPEN
    };
useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, 'products'),
       orderBy('createdAt', 'asc')
    )
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchData();
  }, []);
const sliderRef = useRef(null);
useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  const scrollSpeed = 1; // smooth speed

  let animation;

  const autoScroll = () => {
    slider.scrollLeft += scrollSpeed;

    // jab half width cross ho jaye (original images khatam)
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0; // reset invisible
    }

    animation = requestAnimationFrame(autoScroll);
  };

  animation = requestAnimationFrame(autoScroll);

  return () => cancelAnimationFrame(animation);
}, []);
const NavigateProduct = (id) => {
    navigate(`../productdtl/${id}`);
  };

  useScrollReveal();
  return (
    <div className='Homepage'>
      <Header></Header>
      <section
        className="hero-section"
        style={{
          position: 'relative',
          width: '100vw',
          margin: '0',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="/images/HomeVideo.mp4" type="video/mp4" />
        </video>

        {/* Background color with opacity */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#000',   // yaha koi bhi color
            opacity: 0.7,              // opacity down
            zIndex: 1
          }}
        />

        {/* Content (NO opacity here) */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center'
          }}
        >
          <h1 >Protein-Rich Ready Beans</h1>
          <p>Healthy, tasty & ready in minutes</p>
          <button className="beansybutton">Shop Now</button>
        </div>
      </section>


      {/* NORMAL CONTENT (container allowed here) */}
      <section
        className="after-hero-section how-it-works"
        style={{
          padding: '50px 0 10px'
        }}
      >
        <div className="container reveal">
          <h3 className="main-title text-center ">How It Works</h3>
          <p className="sub-title text-center">
            Ready to Eat – Just Mix & Enjoy
          </p>

          <div className="row mt-5">

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div className='d-flex'>
                  <span className="numround">1</span>&nbsp;
                  <h6 style={{ fontWeight: 'bold' }}>Open the Pack</h6>
                </div>
                <p>
                  Inside the box you’ll find a spoon, tissue and two food packets.
                </p>
                <img src="/images/Step1.jpg" alt="Open Pack" className="step-img reveal" />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div className='d-flex'>
                  <span className="numround">2</span>&nbsp;
                  <h6 style={{ fontWeight: 'bold' }}>Mix Both Packets</h6>
                </div>
                <p>
                  Simply mix the beans packet with the curd or paneer packet.
                </p>
                <img src="/images/Step2.jpg" alt="Mix Packets" className="step-img reveal" />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className=" text-center">
                <div className='d-flex'>
                  <span className="numround">3</span>&nbsp;
                  <h6 style={{ fontWeight: 'bold' }}>Protein Power</h6>
                </div>
                <p>
                  Enjoy a fresh, healthy and high-protein meal.
                </p>
                <br />
                <img src="/images/Step3.jpg" alt="Protein Meal" className="step-img reveal" />
              </div>
            </div>

          </div>
        </div>

      </section>

      <section>
        <div className="container reveal">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold',marginBottom:'30px'}} className='reveal'>Trending Launches</h2>
          <div className="row ">
            {products.filter(item => item.iscombo === false).map(item => (
              <div className="col-md-3 col-lg-3 col-sm-12" key={item.id}>
                <div className="productbeansy-card">
                  <div className="card-3d">
                    <div className="wrapper">
                      <img
                        src={item.image}
                        className="cover-image"
                        alt={item.title}
                      />
                      <div className="hover-overlaybens">
                        <div className="side-icons" onClick={() => NavigateProduct(item.id)}>
                          <i className="bi bi-eye" ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cart-btn add-to-cart"
                    onClick={() => HandleAddtoCart(item)}>
                    Add to Cart
                  </button>

                </div>

                <div className="product-info">
                  <h6>{item.title}</h6>

                  <RatingStars rating={item.rating || 4} />

                  <div className="prices">
                    <span className="new">Rs. {item.price}.00</span>
                    <span className="old">
                      <del>Rs. {item.oldprice}.00</del>
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
      <section>
        <div className="container my-5 reveal">
          <h3 className="text-center fw-bold mb-4 ">Nutritional Benefits</h3>

          <div className="row g-3 justify-content-center nutrition-section">

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="nutrition-card">
                <img src="../images/tag.png" alt="Protein" width="100" />
                <h6>12g Protein</h6>
                <p>Per Serving</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="nutrition-card">
                <img src="../images/rice.png" alt="Fiber" width="100" />
                <h6>High Fiber</h6>
                <p>Supports Digestion</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="nutrition-card">
                <img src="../images/no-liquids.png" alt="Low Calorie" width="100" />
                <h6>Low Calorie</h6>
                <p>Light & Healthy</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="nutrition-card">
                <img
                  src="../images/no-preservatives.png"
                  alt="Vegan"
                  width="100"
                />
                <h6>No Preservatives</h6>
                <p>100% Vegan</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPLORE PRODUCTS */}
<div className="my-5 reveal">
  <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
    Explore Products
  </h3>

  <p style={{ textAlign: "center", fontSize: "15px" }}>
    Our products bring you convenient, high-quality ingredients that make
    cooking faster, easier, and more enjoyable—blending tradition with
    modern simplicity.
  </p>

  <div className="container position-relative my-4">

    {/* LEFT ARROW */}
    {/* <button
      className="combo-arrow left" 
      onClick={() => {
        document.querySelector(".combo-scroll")
          .scrollBy({ left: -300, behavior: "smooth" });
      }}
    >
    <i class="bi bi-arrow-left"></i>
    </button> */}

    {/* PRODUCTS */}
    <div className="combo-scroll" ref={sliderRef}>
      {[...products]
        .filter(item => item.iscombo === true)
        .map(item => (
          <div className="combo-item" key={item.id}>

            <div className="productbeansy-card">
              <div className="card-3d">
                <div className="wrapper">
                  <img
                    src={item.image}
                    className="cover-image"
                    alt={item.title}
                  />

                  <div className="hover-overlaybens">
                    <div className="side-icons" onClick={() => NavigateProduct(item.id)}>
                      <i className="bi bi-eye"></i>
                    </div>
                  </div>
                </div>
              </div>

              <button className="cart-btn" onClick={() => HandleAddtoCart(item)}>
                Add to Cart
              </button>
            </div>

            <div className="product-info">
              <h6>{item.title}</h6>
              <RatingStars rating={item.rating || 4} />

              <div className="prices">
                <span className="new">Rs. {item.price}.00</span>
                <span className="old">
                  <del>Rs. {item.oldprice}.00</del>
                </span>
              </div>
            </div>

          </div>
        ))}
    </div>

    {/* RIGHT ARROW */}
    {/* <button
      className="combo-arrow right"
      onClick={() => {
        document.querySelector(".combo-scroll")
          .scrollBy({ left: 300, behavior: "smooth" });
      }}
    >
     <i class="bi bi-arrow-right"></i>
    </button> */}

  </div>
</div>

      <section className="banner reveal">
        <div className="row container">
          <div className="col-md-6 col-lg-6 col-sm-12 p-5">
            <div className="banner-content">
              <h2 className="title-with-line">Why Beansy?</h2>
              <p className="subtitle">Because good food should feel right.</p>

              <ul className="features">
                <li>
                  <span style={{ color: "yellow" }}>&#10004;</span>{" "}
                  Made with real, natural ingredients
                </li>
                <li>
                  <span style={{ color: "yellow" }}>&#10004;</span>{" "}
                  Farm-fresh goodness
                </li>
                <li>
                  <span style={{ color: "yellow" }}>&#10004;</span>{" "}
                  Made for Modern Living
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="banner-image">
              <img src="/images/combo.png" alt="Beansy Products" />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
<div className="container my-5 customer-reviews-section">
  <h3 className="review-title">Customer reviews</h3>

  <p className="review-subtitle">
    Our customers aren’t just consumers; they are creators. They’ve taken
    our products and woven them into the fabric of their daily lives.
    Here’s what they have to say:
  </p>

  <div className="row g-4">

    {/* REVIEW 1 */}
    <div className="col-lg-6 col-md-12">
      <div className="review-card">
        <div className="review-image">
          <img src="/images/Zesty_Mint_Coroiander_Beans_8.webp" alt="Beans" />
        </div>

        <div className="review-body">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="fa fa-star"></span>
            ))}
          </div>

          <p className="buyer">
            <strong>Nikhil Verma</strong> ✓ Verified Buyer
          </p>

          <div className="tags">
            <span>Tasty</span>
            <span>Healthy</span>
            <span>Fresh</span>
          </div>

          <p className="review-text">
            The mint and coriander combo is just perfect! These beans are
            so fresh-tasting and light, yet full of flavour. My new go-to
            for a healthy snack.
          </p>

          <div className="helpful">
            <span>Was this helpful?</span>
            <span>👍 9</span>
            <span>👎 0</span>
          </div>

          <div className="extra-tags">
            <span>Gluten-Free</span>
            <span>Vegan</span>
          </div>
        </div>
      </div>
    </div>

    {/* REVIEW 2 */}
    <div className="col-lg-6 col-md-12">
      <div className="review-card">
        <div className="review-image">
          <img src="/images/Zesty_Mint_Coroiander_Beans_10.webp" alt="Beans" />
        </div>

        <div className="review-body">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="fa fa-star"></span>
            ))}
          </div>

          <p className="buyer">
            <strong>Amrita Kapoor</strong> ✓ Verified Buyer
          </p>

          <div className="tags">
            <span>Tasty</span>
            <span>Healthy</span>
            <span>Fresh</span>
          </div>

          <p className="review-text">
            Fresh, flavourful and perfectly balanced. A healthy snack
            that actually tastes amazing. Will definitely reorder!
          </p>

          <div className="helpful">
            <span>Was this helpful?</span>
            <span>👍 11</span>
            <span>👎 0</span>
          </div>

          <div className="extra-tags">
            <span>Gluten-Free</span>
            <span>Vegan</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


      {/* OFFER SECTION */}
      <div className="offer-section reveal" >
        <div className="offer-content" >
          <h4>🎉 Get 10% Off Your First Order</h4>
          <div className="offer-form">
            <input type="email" placeholder="Enter your email" />
            <button>Join Beansy</button>
          </div>
          <p className="my-2" style={{ color: "gray" }} >
            No spam · Cancel anytime · Limited-time-offer
          </p>
        </div>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Homepage
