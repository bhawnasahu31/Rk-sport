import React from "react";
import "./ApparelCategories.css";
import { useNavigate } from "react-router-dom";

import cycling from "./cycling.png";
import basketball from "./basketball.png";
import hockey from "./hockey.png";
import motocross from "./motocross.png";
import soccer from "./soccer.png";
import running from "./running.png";
import mountainbike from "./mountainbike.png";
import casual from "./casual.png";

const categories = [
  { title: "Cycling Jerseys", image: cycling },
  { title: "Basketball Jerseys", image: basketball },
  { title: "Hockey Jerseys", image: hockey },
  { title: "Motocross Jerseys", image: motocross },
  { title: "Soccer Jerseys", image: soccer },
  { title: "Running Jerseys", image: running },
  { title: "Mountainbike Trikots", image: mountainbike },
  { title: "T-Shirts, Hoodies, etc.", image: casual },
];

const ApparelCategories = () => { const navigate = useNavigate();

  const handleCustomize = (item) => {
    localStorage.setItem("preSelectCategory", item.title);
    localStorage.setItem("preSelectImage", item.image);
     localStorage.setItem("preSelectSport", item.title);
    navigate("/customize");
  };
  return (
    <section className="apparel">
      <div className="apparel-header">
        <h2>Customize Your Sportswear</h2>
        <p>Select your category and start designing your kit</p>
      </div>

      <div className="apparel-grid">
        {categories.map((item, index) => (
          <div className="apparel-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="card-overlay">
              <h3>{item.title}</h3>
              {/* <button>Customize</button> */}
              <button onClick={() => handleCustomize(item)}>
  Customize
</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApparelCategories;
