import React, { useState } from "react";
import "./Product.css";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";

import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";
import p6 from "./p6.png";

const products = [
  { id: 1, img: p1 },
  { id: 2, img: p2 },
  { id: 3, img: p3 },
  { id: 4, img: p4 },
  { id: 5, img: p5 },
  { id: 6, img: p6 },
  { id: 7, img: p5 },
  { id: 8, img: p6 },
];

export default function Products() {
  const [previewImg, setPreviewImg] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="products">
      <h2>LATEST PRODUCTS</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <span className="discount">-38%</span>

            <div className="hover-icons">
              <i
                onClick={() => toggleWishlist(item.id)}
                className={wishlist.includes(item.id) ? "wish-active" : ""}
              >
                <FaHeart />
              </i>

              <i><FaExchangeAlt /></i>

              <i onClick={() => setPreviewImg(item.img)}>
                <FaEye />
              </i>
            </div>

            <img src={item.img} alt="kit" />

            <h4>Cricket KIT</h4>
            <p className="category">Sublimation Kit</p>

            <div className="price">
              <span className="old">₹799.00</span>
              <span className="new">₹499.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ PREVIEW MODAL */}
      {previewImg && (
        <div className="preview-modal" onClick={() => setPreviewImg(null)}>
          {/* <div className="preview-box"> */}
            {/* <img src={previewImg} alt="preview" /> */}
          {/* </div> */}
        </div>
      )}
    </section>
  );
}
