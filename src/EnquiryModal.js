import React, { useState } from "react";
import "./SportsEnquiryModal.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbz2mTHhv2C-AcIsiBloMv475d5ZIhdbEMdxQorF0_dkzeiOzM1JzycG_DGPVUi-qA9x/exec";

const SportsEnquiryModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // basic validation
    if (!formData.name || !formData.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      const form = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => form.append(k, v));

      await fetch(API_URL, {
        method: "POST",
        body: form,
        mode: "no-cors", // ✅ prevents CORS crash
      });

      alert("✅ Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        sport: "",
        requirement: "",
      });

      onClose();

    } catch (err) {
      console.error(err);
      alert("❌ Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {/* LEFT */}
        <div className="modal-left">
          <h2>RK SPORTSWEAR</h2>
          <p>Custom Team Uniform Manufacturer</p>

          <ul>
            <li>✔ Custom Jersey Design</li>
            <li>✔ Bulk Team Orders</li>
            <li>✔ Fast Production</li>
            <li>✔ All Sports Categories</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="modal-right">
          <h3>Quick Enquiry</h3>

          <form onSubmit={handleSubmit}>

            <input
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="sport"
              value={formData.sport}
              onChange={handleChange}
            >
              <option value="">Select Sport</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Basketball</option>
              <option>Badminton</option>
              <option>Hockey</option>
              <option>Other</option>
            </select>

            <textarea
              name="requirement"
              placeholder="Your Requirement"
              value={formData.requirement}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Get Quote"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SportsEnquiryModal;
