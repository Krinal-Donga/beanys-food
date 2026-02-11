import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import useScrollReveal from "../HomePage/Hooks/useScrollReveal";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);

    useScrollReveal();

    useEffect(() => {
        const fetchProduct = async () => {
            const ref = doc(db, "products", id);
            const snap = await getDoc(ref);
            if (snap.exists()) {
                setProduct({ id: snap.id, ...snap.data() });
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <h2 style={{ padding: 40 }}>Loading...</h2>;

    const discount =
        product.oldprice &&
        Math.round(((product.oldprice - product.price) / product.oldprice) * 100);

    return (
        <div style={{ width: "100vw" }}>
            <Header />

            <div className="pd-wrapper mt-5">
                {/* ================= TOP SECTION ================= */}
                <div className="pd-top">
                    {/* LEFT IMAGE */}
                    <div className="pd-images">
                        {discount && <span className="pd-badge">{discount}% OFF</span>}

                        <img
                            src={`/${product.image}`}
                            alt={product.title}
                            className="pd-main-img"
                        />

                        <div className="pd-thumbs">
                            <img src={`/${product.image}`} alt="" />
                            <img src={`/${product.image}`} alt="" />
                            <img src={`/${product.image}`} alt="" />
                        </div>
                    </div>

                    {/* RIGHT INFO */}
                    <div className="pd-info ">
                        <h1>{product.title}</h1>

                        <div className="pd-rating">
                            ⭐⭐⭐⭐⭐ <span>(1,254 reviews)</span>
                        </div>

                        <div className="pd-price">
                            <span className="pd-final">₹{product.price}</span>
                            {product.oldprice && (
                                <>
                                    <span className="pd-old">₹{product.oldprice}</span>
                                    <span className="pd-off">{discount}% OFF</span>
                                </>
                            )}
                        </div>

                        <p className="pd-desc">
                            Discover the smarter way to enjoy wholesome meals with our freshly
                            cooked ready to eat beans. No soaking, boiling or pressure
                            cooking—just open, serve and enjoy nutritious goodness.
                        </p>

                        {/* QUANTITY */}
                        <div className="pd-qty-row">
                            <div className="pd-qty">
                                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                                <span>{qty}</span>
                                <button onClick={() => setQty(qty + 1)}>+</button>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="pd-buttons">
                            <button className="pd-add">ADD TO CART</button>
                            <button className="pd-buy">BUY NOW</button>
                        </div>

                        <div className="pd-icons">
                            <span>🚚 Free delivery in 3–5 days</span>
                            <span>↩ Easy returns</span>
                            <span>🌱 100% Plant Based</span>
                        </div>
                    </div>
                </div>

                {/* ================= NEW SECTIONS ================= */}

                {/* TRUST BADGES */}
                <div className="mt-5">
                    <h3 className="heading">Why You’ll Love It</h3>

                    <div className="pd-trust ">
                        <div>✅ FSSAI Approved</div>
                        <div>🌱 100% Vegan</div>
                        <div>🚫 No Preservatives</div>
                        <div>🧪 Quality Tested</div>
                    </div>
                </div>


                <div className="pd-pack">
                    <h3>What’s Inside This Pack</h3>
                    <ul>
                        <li>🥥 Creamy Coconut Beans – 180g</li>
                        <li>🌶 Sweet Chilli Beans – 180g</li>
                        <li>🌿 Zesty Mint Coriander Beans – 180g</li>
                    </ul>
                </div>

                {/* USAGE SUGGESTIONS */}
                <div className="pd-usage ">
                    <h3>Best Ways to Enjoy</h3>
                    <div className="usage-grid ">
                        <div>🍚 With Rice</div>
                        <div>🥗 In Salads</div>
                        <div>🌮 Wraps & Tacos</div>
                        <div>🍲 Indian Meals</div>
                    </div>
                </div>
                {/* ================= CUSTOMER REVIEWS ================= */}

                <div className="pd-reviews-section">
                    <h3>Customer Reviews</h3>

                    {/* Rating Summary */}
                    <div className="review-summary">
                        <div className="review-left">
                            <h2>4.8 ⭐</h2>
                            <p>Based on 1,254 reviews</p>
                        </div>

                        <div className="review-bars">
                            <div className="bar-row">
                                <span>5 Star</span>
                                <div className="bar"><div style={{ width: "80%" }}></div></div>
                            </div>
                            <div className="bar-row">
                                <span>4 Star</span>
                                <div className="bar"><div style={{ width: "12%" }}></div></div>
                            </div>
                            <div className="bar-row">
                                <span>3 Star</span>
                                <div className="bar"><div style={{ width: "5%" }}></div></div>
                            </div>
                            <div className="bar-row">
                                <span>2 Star</span>
                                <div className="bar"><div style={{ width: "2%" }}></div></div>
                            </div>
                            <div className="bar-row">
                                <span>1 Star</span>
                                <div className="bar"><div style={{ width: "1%" }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Individual Reviews */}
                    <div className="review-list">
                        <div className="review-card">
                            <h4>Rohan Patel ⭐⭐⭐⭐⭐</h4>
                            <p>Very tasty and super convenient. Loved the coconut flavor!</p>
                            <span>2 days ago</span>
                        </div>

                        <div className="review-card">
                            <h4>Priya Shah ⭐⭐⭐⭐</h4>
                            <p>Healthy and filling. Perfect for quick meals.</p>
                            <span>5 days ago</span>
                        </div>
                    </div>
                </div>

                {/* SHELF LIFE */}
                <div className="pd-storage ">
                    <h4>Shelf Life & Storage</h4>
                    <p>
                        <strong>Shelf Life:</strong> 12 months <br />
                        Store in a cool, dry place. <br />
                        Refrigerate after opening and consume within 24 hours.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetail;
