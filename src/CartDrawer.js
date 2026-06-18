import React from "react";
import './CartDrawer.css';
export default function CartDrawer({ open, onClose }) {
  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}

      <div className={`drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Shopping Cart 🛒</h2>

        <div className="drawer-items">
          <p>Your cart is empty</p>
        </div>

        <button className="checkout-btn">
          Checkout
        </button>
      </div>
    </>
  );
}
