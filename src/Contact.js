import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      {/* Header */}
      {/* <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for custom team sports uniforms</p>
      </div> */}

      <div className="divider"></div>

      {/* Content */}
      <div className="contact-content">
        {/* Left Info */}
        <div className="contact-info">
          <h2>Let’s Talk</h2>
          <p>
            Have questions about customization, bulk orders, or pricing?  
            Our team is here to help you.
          </p>

          <ul>
            <li><strong>📍 Address:</strong> RK Sports Wear, India</li>
            <li><strong>📞 Phone:</strong> +91 98765 43210</li>
            <li><strong>✉️ Email:</strong> info@rksportswear.com</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
