import React, { useState } from "react";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import "../Recipes/Recipes.css"; // same CSS use kar sakti ho
import useScrollReveal from "../HomePage/Hooks/useScrollReveal";

function Recipes() {
  const [showMore, setShowMore] = useState(false);
useScrollReveal();
  return (
    <div style={{ width: "100vw" }}>
      <Header />

      <div style={{ height: "100px" }}></div>

      <div className="container my-1">
        <h1 className="text-center mb-3 fw-bold" style={{ color: '#005c3d' }}>Healthy Recipes</h1>

        {/* ===== RECIPE 1 ===== */}
        <section className="recipe-block reveal">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/images/Recipe1.png"
                className="recipe-img"
                alt="Vegetable Salad"
              />
            </div>
            <div className="col-md-6">
              <h2>Vegetable Salad</h2>
              <div className="d-flex">
                <span className="badge bg-success me-2">Easy</span>
                <span className="badge bg-warning text-dark me-2">Popular</span>
                <span className="badge bg-info text-dark">Healthy</span>
              </div>
              <p className="meta mt-2">⏱ 10 mins • 🍽 2 servings</p>
              <div className="rating">⭐⭐⭐⭐☆ <span>(4.2)</span></div>

              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>Mixed vegetables</li>
                    <li>Salt</li>
                    <li>Olive oil</li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <h5>Method</h5>
                  <ol>
                    <li>Chop vegetables</li>
                    <li>Add salt & oil</li>
                    <li>Mix and serve</li>
                  </ol>
                </div>
              </div>

              <div className="nutrition-box mt-3">
                <strong>Nutrition</strong>
                <p>Calories: 180 kcal | Fiber: 5g</p>
              </div>

              <button className="btn btn-outline-success mt-3">
                Save Recipe ❤️
              </button>
            </div>
          </div>
        </section>

        {/* ===== RECIPE 2 ===== */}
        <section className="recipe-block reveal">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img
                src="/images/recepi2.png"
                className="recipe-img"
                alt="Beans Stir Fry"
              />
            </div>
            <div className="col-md-6">
              <h2>Beans Stir Fry</h2>
              <div className="d-flex">

                <span className="badge bg-success me-2">Beginner</span>
                <span className="badge bg-info text-dark">Healthy</span>
              </div>
              <p className="meta mt-2">⏱ 15 mins • 🍽 2 servings</p>
              <div className="rating">⭐⭐⭐⭐⭐ <span>(4.6)</span></div>

              <div className="row mt-3">
                <div className="col-md-4">
                  <h5>Ingredients</h5>
                  <ul>
                    <li>Green beans</li>
                    <li>Garlic</li>
                    <li>Spices</li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <h5>Method</h5>
                  <ol>
                    <li>Heat oil</li>
                    <li>Add garlic & beans</li>
                    <li>Cook till soft</li>
                  </ol>
                </div>
              </div>

              <div className="nutrition-box mt-3">
                <strong>Nutrition</strong>
                <p>Calories: 200 kcal | Protein: 6g</p>
              </div>

              <button className="btn btn-outline-success mt-3">
                Save Recipe ❤️
              </button>
            </div>
          </div>
        </section>

        {/* ===== EXTRA RECIPES ===== */}
        {showMore && (
          <>
            <section className="recipe-block">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src="/images/Recepe3.png"
                    className="recipe-img"
                    alt="Lentil Bowl"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Simple Lentil Bowl</h2>
                  <div className="d-flex">

                    <span className="badge bg-success me-2">Easy</span>
                    <span className="badge bg-info text-dark">Healthy</span>
                  </div>
                  <p className="meta mt-2">⏱ 20 mins • 🍽 3 servings</p>
                  <div className="rating">⭐⭐⭐⭐☆ <span>(4.3)</span></div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <h5>Ingredients</h5>
                      <ul>
                        <li>Boiled lentils</li>
                        <li>Onion &amp; tomato</li>
                        <li>Spices</li>
                      </ul>
                    </div>

                    <div className="col-md-8">
                      <h5>Method</h5>
                      <ol>
                        <li>Mix lentils &amp; veggies</li>
                        <li>Add spices</li>
                        <li>Serve warm</li>
                      </ol>
                    </div>
                  </div>

                  <div className="nutrition-box mt-3">
                    <strong>Nutrition</strong>
                    <p>Calories: 180 kcal | Fiber: 5g</p>
                  </div>

                  <button className="btn btn-outline-success mt-3">
                    Save Recipe ❤️
                  </button>
                </div>
              </div>
            </section>

            <section className="recipe-block ">
              <div className="row align-items-center flex-md-row-reverse">
                <div className="col-md-6">
                  <img
                    src="/images/Recipe5.png"
                    className="recipe-img"
                    alt="Bean Bowl"
                  />
                </div>
                <div className="col-md-6">
                  <h2>The Sriracha-Honey Bean Bowl</h2>
                  <div className="d-flex">

                    <span className="badge bg-danger me-2">Spicy AF</span>
                    <span className="badge bg-success me-2">High Protein</span>
                    <span className="badge bg-dark" style={{color:'white'}}>Gen-Z Fav</span>
                  </div>
                  <p className="meta mt-2">⏱ 10 mins • 🍽 1 serving</p>
                  <div className="rating">⭐⭐⭐⭐⭐ <span>(4.9)</span></div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <h5>Ingredients</h5>
                      <ul>
                        <li>Rice</li>
                        <li>Vegetables</li>
                        <li>Spices</li>
                      </ul>
                    </div>

                    <div className="col-md-8">
                      <h5>Method</h5>
                      <ol>
                        <li>Cook rice</li>
                        <li>Sauté vegetables</li>
                        <li>Mix and serve</li>
                      </ol>
                    </div>
                  </div>

                  <div className="nutrition-box mt-3">
                    <strong>Nutrition</strong>
                    <p>Calories: 180 kcal | Fiber: 5g</p>
                  </div>

                  <button className="btn btn-outline-success mt-3">
                    Save Recipe ❤️
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ===== CTA ===== */}
        <div className="text-center my-5 reveal">
          <h3>Want more healthy recipes?</h3>
          <p>New recipes added every week</p>
          <button
            className="btn btn-success px-4 reveal"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Explore More Recipes"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Recipes;
