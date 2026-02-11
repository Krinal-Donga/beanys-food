import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./ShopAll.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { addtocart } from "../Services/cartService";
import { useDispatch } from "react-redux";
import { fetchCart, openCart } from "../Redux/CartSlice";
import useScrollReveal from "../HomePage/Hooks/useScrollReveal";
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

function ShopAll() {

  const [products, setProducts] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const [discountOnly, setDiscountOnly] = useState(false);
  useScrollReveal();
  const HandleAddtoCart = async (item) => {
    await addtocart(item);
    dispatch(fetchCart());
    dispatch(openCart()); // 🔥 SIDEBAR OPEN
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(data);
        setFilterdata(data);
      } catch (err) {
        console.error("Error fetching products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (discountOnly) {
      temp = temp.filter(item => item.discount);
    }

    if (sortBy === "low") {
      temp.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      temp.sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }

    setFilterdata(temp);
  }, [products, sortBy, discountOnly]);

  const navigate = useNavigate();
  const NavigateProduct = (id) => {
    navigate(`../productdtl/${id}`);
  };

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="shopall-hero light">
        <div className="hero-lefts reveal">
          <span className="hero-badge">Our Complete Bean Range</span>
          <h1>
            Everyday Meals,<br />
            <span>Done Right</span>
          </h1>
          <p>
            Clean, plant-based bean meals made for everyday Australian kitchens.
          </p>
        </div>

        <div className="hero-right reveal">
          <img src="/images/shopall.png" alt="Beansy Products" />
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-wrapper reveal">
        <div className="filter-left">
          <span className="filter-title">Filter</span>

          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <label className="filter-check">
            <input
              type="checkbox"
              checked={discountOnly}
              onChange={(e) => setDiscountOnly(e.target.checked)}
            />
            <span>Discounted Only</span>
          </label>
        </div>

        <span className="product-count">
          {filterdata.length} Products
        </span>
      </div>

      {/* PRODUCTS */}
      <section>
        <Container className="combos-section reveal">
          <div className="shopall-header">
            <h2>Explore Our Bestselling Beans</h2>
            <p>Wholesome, protein-rich bean meals crafted for busy lifestyles.</p>
          </div>

          {loading ? (
            <p className="loading-text">Loading products…</p>
          ) : (
            <Row className="g-4">
              {filterdata.map((item) => (
                <Col lg={3} md={4} sm={6} key={item.id}>
                  <div className="combo-card">
                    <div className="combo-img">
                      {item.discount && (
                        <span className="discount-badge">
                          {item.discount}% OFF
                        </span>
                      )}

                      <div className="img-bg">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>

                    <div className="combo-body">
                      <h5>{item.title}</h5>

                      <div className="price-row">
                        <span className="price">₹{item.price}</span>

                        <div className="rating-wrapper">
                          <RatingStars rating={item.rating || 4} />
                        </div>
                      </div>

                      <div className="combo-actions">
                        <button
                          className="btn-view"
                          onClick={() => NavigateProduct(item.id)}
                        >
                          View
                        </button>
                        <button className="btn-cart" onClick={() => HandleAddtoCart(item)}>
                          <i className="bi bi-cart-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default ShopAll;
