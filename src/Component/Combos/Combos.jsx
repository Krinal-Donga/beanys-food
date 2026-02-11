import React, { useEffect, useState } from 'react';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import '../Combos/Combos.css';
import { useNavigate } from 'react-router-dom';
import CartPage from '../CartPage/CartPage';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Services/cartService';
import { fetchCart, openCart } from '../Redux/CartSlice';
import useScrollReveal from '../HomePage/Hooks/useScrollReveal';

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

function Combos() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const NavigateProduct = (id) => {
    navigate(`../productdtl/${id}`);
  };
  useScrollReveal();

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

  return (
    <div style={{ paddingTop: '60px', width: '100vw', overflowX: 'hidden' }}>
      <Header />
      {/* HERO */}
      <section className="combo-hero-pro">
        <Container className='reveal'>
          <Row className="align-items-center">

            {/* LEFT CONTENT */}
            <Col lg={6} className="hero-left">
              <span className="hero-badge">⭐ 4.8 Rated Combos</span>

              <h1>
                Healthy Combos <br />
                <span>Made for Busy Lives</span>
              </h1>

              <p>
                Nutritious, value-packed meals curated by experts — fresh, fast & delicious.
              </p>

              <div className="hero-actions">
                <button className="btn-primary-hero">Explore Combos</button>
                <button className="btn-outline-hero">How it works</button>
              </div>

              <div className="hero-trust">
                <span>🥗 Fresh</span>
                <span>⚡ Fast</span>
                <span>💚 Healthy</span>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} className="hero-right">
              <div className="hero-image-card">
                <img src="/images/combos.png" alt="Healthy Combos" className='Hero-img' width={'650px'} height={'400px'} />
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      <section className="combo-stats reveal">
        <Container>
          <Row className="text-center reveal">
            <Col md={3}><h4>10K+</h4><p>Happy Orders</p></Col>
            <Col md={3}><h4>4.8 ★</h4><p>Customer Rating</p></Col>
            <Col md={3}><h4>100%</h4><p>Fresh Ingredients</p></Col>
            <Col md={3}><h4>30 min</h4><p>Avg Delivery</p></Col>
          </Row>
        </Container>
      </section>
      <section className="combo-tags reveal">
        <Container>
          <div className="tag-list reveal">
            <span>🥗 Healthy</span>
            <span>🔥 Best Seller</span>
            <span>💪 High Protein</span>
            <span>🌱 Veg Friendly</span>
            <span>⚡ Quick Meal</span>
          </div>
        </Container>
      </section>

      {/* COMBOS */}
      <Container className="combos-section reveal">
        <Row className="g-4">
          {products.filter(item => item.iscombo === true).map(p => (
            <Col key={p.id} lg={3} md={6}>
              <div className="combo-card">

                <div className="combo-img">
                  {p.oldprice && (
                    <span className="discount-badge">
                      {Math.round(((p.oldprice - p.price) / p.oldprice) * 100)}% OFF
                    </span>
                  )}



                  <div className="img-bg">
                    <img src={p.image} alt={p.title} />
                  </div>
                </div>

                <div className="combo-body">
                  <h5>{p.title}</h5>

                  <RatingStars rating={p.rating || 4} />

                  <div className="price-row">
                    <span className="price">₹{p.price}
                      {p.oldprice && <del>₹{p.oldprice}</del>}
                    </span>
                  </div>

                  <div className="combo-actions">
                    <button className="btn-view" onClick={() => NavigateProduct(p.id)}>View</button>
                    <button className="btn-cart" onClick={() => HandleAddtoCart(p)}>
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* WHY COMBOS */}
      <section className="why-combos reveal">
        <Container>
          <Row>
            <Col md={4}>
              <i className="bi bi-bag-check"></i>
              <h6>Fresh Ingredients</h6>
              <p>Premium quality food</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-lightning-charge"></i>
              <h6>Quick Delivery</h6>
              <p>Fast & hygienic</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-award"></i>
              <h6>Best Value</h6>
              <p>More food, more savings</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Combos;
