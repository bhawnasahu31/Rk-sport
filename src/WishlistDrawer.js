import React from "react";

export default function WishlistDrawer({ open, onClose }) {
  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}

      <div className={`drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>My Wishlist ❤️</h2>

        <div className="drawer-items">
          <p>No items in wishlist</p>
        </div>
      </div>
    </>
  );
}
