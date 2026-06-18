import React from "react";
import "./AboutUs.css";
import aboutImg from "./about.png"; // apni image lagao

const AboutUs = () => {
  return (
    <section className="about">
      
      {/* Hero */}
      <div className="about-hero">
        <h1>About RK Sports Wear</h1>
        <p>
          Premium Custom Sports Uniform Manufacturing Company
        </p>
      </div>

      {/* Content */}
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="RK Sports Wear" />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            RK Sports Wear is a leading manufacturer of high-quality custom
            sports uniforms and team apparel. We specialize in sublimation
            printing, performance fabrics, and professional finishing to deliver
            world-class sportswear for teams, clubs, schools, and organizations.
          </p>

          <p>
            From design to delivery, our process ensures precision,
            durability, and comfort. We combine modern technology with skilled
            craftsmanship to create uniforms that perform as good as they look.
          </p>

          <div className="about-stats">
            <div>
              <h3>500+</h3>
              <span>Teams Served</span>
            </div>
            <div>
              <h3>50K+</h3>
              <span>Uniforms Produced</span>
            </div>
            <div>
              <h3>8+</h3>
              <span>Sports Categories</span>
            </div>
          </div>
        </div>

      </div>

      {/* Values */}
      <div className="about-values">
        <h2>Why Choose Us</h2>

        <div className="values-grid">
          <div className="value-card">
            <h4>Premium Quality</h4>
            <p>
              We use top-grade fabrics and advanced sublimation technology
              for long-lasting performance wear.
            </p>
          </div>

          <div className="value-card">
            <h4>Full Customization</h4>
            <p>
              Colors, logos, names, numbers — everything customized exactly
              as your team needs.
            </p>
          </div>

          <div className="value-card">
            <h4>Fast Production</h4>
            <p>
              Streamlined manufacturing ensures quick turnaround time without
              compromising quality.
            </p>
          </div>

          <div className="value-card">
            <h4>Bulk Orders</h4>
            <p>
              Special pricing and support for clubs, schools, academies and
              tournaments.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
