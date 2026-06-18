import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <span className="custom">RK</span>
            <span className="sports">SPORTS</span>
            <span className="wear">WEAR</span>
          </h2>

          <p><FaEnvelope /> <strong>Our Email:</strong><br /> info@customsportswear.in</p>
          <p><FaPhoneAlt /> <strong>Our phone number:</strong><br /> +91 7078484696</p>
          <p><FaMapMarkerAlt /> <strong>Our Address:</strong><br /> Second Floor, Metro Plaza</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="footer-col">
          <h3>INFORMATION</h3>
          <ul className="footer-links">
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/return-policy">Return, Cancellation and Refund Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h3>SUBSCRIBE</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <button>SEND</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="design">
          © 2026 Custom Sports Wear | Designed & Developed by Rk sports design by{" "}
          <a href="https://yashvitech.com/career" target="_blank" rel="noopener noreferrer">
            yashvitech Pvt.Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
