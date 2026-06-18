import React from "react";
import "./DesignerGrid.css";
import { useNavigate } from "react-router-dom";

/* ✅ import images */
import c1 from "./cri1.png";
import s1 from "./soccer1.png";
import tennis from "./tennis.png";
import badminton from "./badminton.png";
import pickle from "./Pickle.png";
import p1 from "./p1.png";
import so2 from "./so2.png";
import cricket1 from "./cricket1.png";
// import logo8 from "./logo8.png";

const items = [
  { title: "Cricket", img: c1 },
  { title: "Soccer", img: s1 },
  { title: "Tennis", img: tennis },
  { title: "Badminton", img: badminton },
  { title: "pickleball", img: pickle },
  { title: "teamwear", img: p1 },
  { title: "solidtshirts", img: so2 },
  { title: "Academies", img: cricket1 },
//   { title: "AllAccessories", img: logo8 }
];

export default function DesignerGrid() {
  const navigate = useNavigate();

  return (
    <div className="designer-page">

      {/* HEADER */}
      <div className="designer-header"   
          style={{ cursor: "pointer" }}>
        <div className="designer-logo" onClick={() => navigate("/")}>
           <span className="custom">RK</span>
          <span className="sports">SPORTS</span>
          <span className="wear">WEAR</span>
        </div>

        <div className="designer-menu">
          <span>SELECT SPORT</span>
          <span>DESIGN BASKET</span>
          <span>LOCKER ROOM</span>
          <span>UPLOAD DESIGN</span>
        </div>
      </div>

      {/* GRID */}
      <div className="designer-grid">
        {items.map((item, i) => (
          <div
            className="designer-card"
            key={i}
  onClick={() => navigate(`/designs/${item.title.toLowerCase()}`)}
          >
            <div className="designer-img-wrap">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="designer-label">
              {item.title}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
