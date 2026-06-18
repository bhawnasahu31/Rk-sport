import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SportGallery.css";

/* cricket catalogue images */
import ct1 from "./ct1.png";
import ct2 from "./ct2.png";
import ct3 from "./ct3.png";
import cap from "./cap.png";
import hoodie from "./hoodie.png";
import te1 from "./te1.png";
import te2 from "./te2.png";
import te3 from "./ten3.png";
import te4 from "./tei4.png";
import te5 from "./tei5.png";
/* soccer catalogue images */
import sc1 from "./sc1.png";
import sc2 from "./sc3.png";

import pl1 from "./pl1.png";

import t1 from "./t1.png";
import t2 from "./t2.png";
import t3 from "./t3.png";
import t4 from "./t4.png";
import t5 from "./t5.png";

import l1 from "./l1.png";
import l2 from "./l2.png";
import l3 from "./l3.png";
import l4 from "./l4.png";
import l5 from "./l5.png";
import l6 from "./l6.png";
/* ✅ catalogue data instead of flat list */

const catalogue = {
    cricket: [
        { name: "Cricket T Shirts", img: ct1 },
        { name: "Cricket Pro Series", img: ct2 },
        { name: "Trousers", img: ct3 },
        { name: "Cap", img: cap },
        { name: "Hoodie", img: hoodie },
    ],

    soccer: [
        { name: "Soccer Jersey", img: sc1 },
        { name: "Soccer Shorts", img: sc2 },
    ],

    tennis: [
        { name: "T-shirt", img: te1 },
        { name: "T-shirt Pro series", img: te2 },
        { name: "Shorts", img: te3 },
        { name: "Jacket", img: te4 },
        { name: "Hoddie", img: te5 },
    ],

    badminton: [
        { name: "T-shirt", img: te1 },
        { name: "T-shirt Pro series", img: te2 },
        { name: "Shorts", img: te3 },
        { name: "Jacket", img: te4 },
        { name: "Hoddie", img: te5 },
    ],
    pickleball: [
        { name: "T-shirt", img: pl1 },
        { name: "T-shirt", img: te1 },
        { name: "T-shirt Pro series", img: te2 },
        { name: "Shorts", img: te3 },
        { name: "Jacket", img: te4 },
        { name: "Hoddie", img: te5 },
    ],
    teamwear: [
        { name: "T-shirt", img: te1 },
        { name: "T-shirt Pro series", img: te2 },
        { name: "Shorts", img: te3 },
        { name: "Jacket", img: te4 },
        { name: "Hoddie", img: te5 },
        { name: "Hoodie", img: hoodie },
    ],
    solidtshirts: [
        { name: "gray T-shirt", img: t1 },
        { name: "yellow T-shirt", img: t2 },
        { name: "pista T-shirt", img: t3 },
        { name: "black T-shirt", img: t4 },
        { name: "darkgreen T-shirt", img: t5 },
    ],
    academies: [
        {name:"cricket" ,img:l1},
        {name:"cricket" ,img:l2},
        {name:"cricket" ,img:l3},
        {name:"football" ,img:l4},
        {name:"badminton" ,img:l5},
        {name:"pickleball" ,img:l6},
    ],
};

export default function SportDesignGallery() {
    const { sport } = useParams();
    const navigate = useNavigate();

    const items = catalogue[sport] || [];

    return (
         <div className="designer-page">

      {/* HEADER */}
      <div className="designer-header"   
          style={{ cursor: "pointer" }}>
        <div className="designer-logo" onClick={() => navigate("/Design")}>
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
        <div className="gallery-page" >
          

            {/* TITLE */}
            <h2 className="gallery-title" >
                {sport?.toUpperCase()} CATALOGUE
            </h2>

            {/* GRID */}
            <div className="gallery-grid">
                {items.map((item, i) => (
                    <div
                        className="gallery-card"
                        key={i}
                        onClick={() => navigate(`/designs/${item.name}`)}

                    >
                        <div className="gallery-img">
                            <img src={item.img} alt={item.name} />
                        </div>

                        <div className="gallery-label">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>  </div>

            {/* Empty fallback */}
            {items.length === 0 && (
                <p className="empty-msg">
                    No catalogue found for this sport
                </p>
            )}

        </div>
    );
}
