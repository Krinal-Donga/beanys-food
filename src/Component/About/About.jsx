import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import '../About/About.css'
import useScrollReveal from '../HomePage/Hooks/useScrollReveal';

function About() {
    const features = [
        { title: 'Authentic Taste', img: '../images/about-i5.png' },
        { title: 'Time Convenient', img: '../images/about-i6.png' },
        { title: 'Healthy & Natural', img: '../images/about-i7.png' },
        { title: 'Futuristic Approach', img: '../images/about-i8.png' },
    ];
useScrollReveal();
    return (
        <div className="about">
            <Header />

            <video autoPlay muted loop playsInline className="sec__video video" width="100%">
                <source src="//beansyfoods.com/cdn/shop/videos/c/vp/8cd6c6db40ca4640aa199e5d709094f9/8cd6c6db40ca4640aa199e5d709094f9.HD-1080p-7.2Mbps-55479172.mp4" />
            </video>

            <section className="about-wrapper reveal">
                <div className="about-container reveal">
                    <div className="about-left">
                        <h1>A Soulful Blend of Freshness & Convenience</h1>
                        <p>
                            In today’s fast-paced world, we understand the struggle of balancing a
                            hectic schedule with wellness goals.
                        </p>
                        <p>
                            Our products eliminate prep time entirely – just open, use, and enjoy.
                        </p>
                        <ul>
                            <li>✨ Blending Tradition & Innovation</li>
                            <li>✨ Effortless Eating & Premium Quality</li>
                            <li>✨ Fresh Ingredients, No Preservatives</li>
                        </ul>
                        <button className="about-btn">ABOUT BEANSYFOODS</button>
                    </div>
                    <div className="about-right">
                        <img src="../images/FoodPaket.webp" alt="Beansy Products" />
                    </div>
                </div>
            </section>

            <section className="why-beansy reveal">
                <div className="why-btn-wrapper reveal">
                    <button className="about-btn">The Heart of Our Products</button>
                </div>

                <div className="container why-container">
                    <h2 className="why-title">Why Beansyfoods?</h2>
                    <p className="why-desc">
                        Our ready-to-eat ingredients use signature Retort technology ensuring
                        long shelf life without preservatives.
                    </p>

                    <div className="row reveal">
                        {features.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-12 feature-box">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="feature-icon"
                                />
                                <h6 className="why-item-title">{item.title}</h6>
                                <p className="why-item-desc">
                                    Premium ingredients crafted for modern kitchens.
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="brand-promise mt-3 ">
                <div className="container text-center reveal">
                    <h2 className="promise-title">Our Promise</h2>
                    <p className="promise-desc">
                        Honest food, real ingredients, and zero compromises — crafted for modern lives.
                    </p>

                    <div className="row mt-4 reveal">
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                            <div className='promise-box'>
                                🌱 100% Natural Ingredients
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className='promise-box'>
                                ⏱ Saves Your Cooking Time
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className='promise-box'>
                                🍲 Authentic Home-style Taste
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-wrapper">
                <div className="about-container reveal">
                    <div className="about-left">
                        <h1>Our Mission</h1>
                        <p>
                            Simplifying home food by making nutritious, preservative-free meals
                            accessible to everyone.
                        </p>
                        <button className="about-btn">Home-Cooked Comfort</button>
                    </div>
                    <div className="about-right">
                        <video autoPlay muted loop playsInline >
                            <source src="../images/WhatsApp Video 2026-01-05 at 4.31.26 PM (1).mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section className="about-wrapper">
                <div className="about-container reveal">
                    <div className="about-right">
                        <img
                            src="../images/version2.jpg"
                            alt="Our Vision"
                            className="side-media vision-media"
                        />
                    </div>
                    <div className="about-left">
                        <h1>Our Vision</h1>
                        <p>
                            Our vision is to bring convenience & authenticity together by offering the busy lives the comfort of ready to eat meals effortlessly.
                        </p>
                        <button className="about-btn">Convenience with Unmatched Quality</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
