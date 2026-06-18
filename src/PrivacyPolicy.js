import React from "react";
import "./Policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">
        <h1>Privacy Policy</h1>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We collect basic customer information such as name, email, phone,
            and shipping address to process orders and provide support.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <ul>
            <li>Order processing and delivery</li>
            <li>Customer support</li>
            <li>Service improvement</li>
          </ul>
        </section>

        <section>
          <h2>Data Protection</h2>
          <p>
            We implement reasonable security measures to protect your personal
            data.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            We may use trusted third-party services for payments and shipping.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Our website may use cookies to improve user experience.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>info@customsportswear.in</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
