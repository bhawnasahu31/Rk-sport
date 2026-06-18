import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

import hero1 from "./img2.png";
import hero2 from "./nkdw.gif";
import hero3 from "./3d jersey.gif";

const slides = [
  {
    offer: "30%",
    title: "Design a Beautiful kit for",
    title2: "your team now.",
    text:
      "We Design sportswear for teams which help you win, need Custom Sports Uniforms for your Team? Get in touch now!",
    image: hero1,
  },
  {
    offer: "40%",
    title: " Customised Teamwear",
    // title2: "Customised Teamwear",
    text:
      "Premium sublimation sportswear for Cricket, Football, Kabaddi & more.",
    image: hero2,
  },
  {
    offer: "25%",
    title: "Create Your",
    title2: "Own Sports Jersey",
    text:
      "High quality custom jerseys for professional & local teams.",
    image: hero3,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    
    <section className="hero"  >
      {/* Offer Badge */}
      <div className="offer-badge" data-aos="fade-down">
        <span>{slide.offer}</span>
        <small>OFF</small>
      </div>

      {/* Content */}
      <div className="hero-content" data-aos="fade-right" key={current}>
        <p className="top-text">
          100% SUBLIMATION SPORTSWEAR MANUFACTURER.
        </p>

        <h1>
          {slide.title} <br />
          {slide.title2}
        </h1>

        <p className="sub-text">{slide.text}</p>

        <button className="hero-btn">Get in Touch</button>
      </div>

      {/* Image */}
      <div className="hero-image" data-aos="zoom-in" key={slide.image}>
        <img src={slide.image} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
