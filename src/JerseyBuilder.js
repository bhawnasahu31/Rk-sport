import React, { useState } from "react";
import "./JerseyBuilder.css";
import jersey from "./jersey.png";
import { useNavigate } from "react-router-dom";

const JerseyBuilder = () => {
  const [qty, setQty] = useState(1);
  const price = 499;
  const total = price * qty;
const navigate = useNavigate();

  return (
    <div className="builder">

      {/* ===== TOP BAR ===== */}
      <div className="topbar">
        <div className="logo">RK SPORTS</div>

        <div className="menu">
          <span>File</span>
          <span>Designs</span>
          <span>Print</span>
          <span>Share</span>
          <span>Help</span>
        </div>

        <div className="top-actions">
          <div className="price">₹{total}.00</div>
          <button className="btn-primary">ADD TO CART</button>
          {/* <button className="btn-dark" onClick="">BACK TO SHOP</button> */}
          <button className="btn-dark" onClick={() => navigate("/")}>
  BACK TO SHOP
</button>

        </div>
      </div>

      {/* ===== BODY ===== */}
      <div className="builder-body">

        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <h3>Football Kit</h3>

          <button className="change-btn">Change Product</button>

          <div className="qty-box">
            <label>Quantity</label>
            <div className="qty-controls">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          <div className="tools">
            <Tool name="Templates" />
            <Tool name="Cliparts" />
            <Tool name="Images" />
            <Tool name="Text" />
            <Tool name="Shapes" />
            <Tool name="Layers" />
          </div>
        </div>

        {/* CENTER CANVAS */}
        <div className="canvas-area">
          <div className="canvas">
            <img src={jersey} alt="" />

            {/* Example overlay text */}
            <div className="overlay-name">PLAYER</div>
            <div className="overlay-number">10</div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Tool = ({ name }) => (
  <div className="tool-item">{name}</div>
);

export default JerseyBuilder;
