import React, { useState, useEffect, useRef } from "react";
import * as htmlToImage from "html-to-image";

import "./Customize.css";

// Example jerseys
import football1 from "./football1.png";
import football2 from "./football2.png";
import cricket1 from "./cricket1.png";
import cricket2 from "./cricket2.png";
import hockey1 from "./hockey1.png";
import hockey2 from "./hockey2.png";
import Basketball1 from './basketball1.png';
import Basketball2 from './basketball2.png';
import cycling from "./cy.png";
import motocross from "./bike.png";
import soccer from "./s1.png";
import running from "./r1.png";
import mountainbike from "./m1.png";
import casual from "./c1.png";

const fonts = ["Arial", "Impact", "Roboto", "Verdana", "Comic Sans MS"];

const Customize = () => {
  const sports = {
    Football: [football1, football2],
    Cricket: [cricket1, cricket2],
    Basketball: [Basketball1, Basketball2],
    Hockey: [hockey1, hockey2],
    Cycling: [cycling],
    Motocross:[motocross],
    Soccer:[soccer],
    Running:[running],
    Mountainbike:[mountainbike],
    Casual:[casual],
  };

  const previewRef = useRef(); // ✅ ref for jersey preview

  const [selectedSport, setSelectedSport] = useState("Football");
  const [selectedJersey, setSelectedJersey] = useState(sports[selectedSport][0]);

  const [color, setColor] = useState("#ffd800");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [size, setSize] = useState("M");
  const [font, setFont] = useState("Arial");
  const [fontColor, setFontColor] = useState("#111111");
  const [jerseySide, setJerseySide] = useState("Front");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
    setSelectedJersey(sports[sport][0]);
  };

  const handleAddToCart = async () => {
    let previewDataUrl = "";
    if (previewRef.current) {
      previewDataUrl = await htmlToImage.toPng(previewRef.current);
    }

    const design = {
      id: Date.now(),
      selectedSport,
      selectedJersey,
      color,
      name,
      number,
      size,
      font,
      fontColor,
      jerseySide,
      quantity,
      notes,
      previewImage: previewDataUrl
    };

    // Save to cartItems in localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.push(design);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    alert("Added to Cart!");
  };

  const handleSaveDesign = () => {
    const edit = JSON.parse(localStorage.getItem("editDesign"));

    const design = {
      selectedSport,
      selectedJersey,
      color,
      name,
      number,
      size,
      font,
      fontColor,
      jerseySide,
      quantity,
      notes,
      id: edit ? edit.id : Date.now()
    };

    let designs = JSON.parse(localStorage.getItem("savedDesigns") || "[]");

    if (edit) {
      designs = designs.map(d => d.id === edit.id ? design : d);
    } else {
      designs.push(design);
    }

    localStorage.setItem("savedDesigns", JSON.stringify(designs));
    localStorage.removeItem("editDesign");

    alert(edit ? "Design updated!" : "Design saved!");
  };

  useEffect(() => {
    const edit = JSON.parse(localStorage.getItem("editDesign"));
    if (!edit) return;

    setSelectedSport(edit.selectedSport);

    const jerseyList = sports[edit.selectedSport];
    if (jerseyList.includes(edit.selectedJersey)) {
      setSelectedJersey(edit.selectedJersey);
    } else {
      setSelectedJersey(jerseyList[0]);
    }

    setColor(edit.color);
    setName(edit.name);
    setNumber(edit.number);
    setSize(edit.size);
    setFont(edit.font);
    setFontColor(edit.fontColor);
    setJerseySide(edit.jerseySide);
    setQuantity(edit.quantity);
    setNotes(edit.notes);

  }, []);

  useEffect(() => {
    const sportTitle = localStorage.getItem("preSelectSport");
    if (!sportTitle) return;

    const map = {
      "Cycling Jerseys": "Cycling",
      "Basketball Jerseys": "Basketball",
      "Hockey Jerseys": "Hockey",
      "Motocross Jerseys": "Motocross",
      "Soccer Jerseys": "Soccer",
      "Running Jerseys": "Running",
      "Mountainbike Trikots": "Mountainbike",
      "T-Shirts, Hoodies, etc.": "Casual",
    };

    const sportKey = map[sportTitle];

    if (sportKey && sports[sportKey]) {
      setSelectedSport(sportKey);
      setSelectedJersey(sports[sportKey][0]);
    }

    localStorage.removeItem("preSelectSport");
  }, []);

  return (
    <section className="customize-section">
      <h2>Customize Your Team Jersey</h2>

      <div className="customize-container">
        {/* LEFT: Jersey Preview */}
        <div className="jersey-preview" ref={previewRef} style={{ backgroundColor: color }}>
          <img src={selectedJersey} alt="Jersey" className="jersey-img" />
          <div className="jersey-text" style={{ fontFamily: font, color: fontColor }}>
            <span className="player-name">{name || "PLAYER"}</span>
            <span className="player-number">{number || "00"}</span>
          </div>
          <div className="jersey-side-label">{jerseySide}</div>
        </div>

        {/* RIGHT: Customization Form */}
        <div className="custom-options">

          <InputGroup label="Select Sport">
            <select value={selectedSport} onChange={e => handleSportChange(e.target.value)}>
              {Object.keys(sports).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </InputGroup>

          <div className="jersey-gallery">
            <h4>Choose a Jersey Template</h4>
            <div className="jersey-thumbnails">
              {sports[selectedSport].map((j, i) => (
                <img
                  key={i}
                  src={j}
                  alt={`Jersey ${i + 1}`}
                  className={`thumbnail ${selectedJersey === j ? "selected" : ""}`}
                  onClick={() => setSelectedJersey(j)}
                />
              ))}
            </div>
          </div>
{/* 
          <InputGroup label="Jersey Color">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          </InputGroup> */}

          <InputGroup label="Player Name">
            <input type="text" placeholder="Enter Player Name" value={name} onChange={e => setName(e.target.value)} />
          </InputGroup>

          <InputGroup label="Player Number">
            <input type="text" placeholder="Enter Number" value={number} onChange={e => setNumber(e.target.value)} />
          </InputGroup>

          <InputGroup label="Size">
            <select value={size} onChange={e => setSize(e.target.value)}>
              {["S","M","L","XL","XXL"].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </InputGroup>

          <InputGroup label="Font Style">
            <select value={font} onChange={e => setFont(e.target.value)}>
              {fonts.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </InputGroup>

          <InputGroup label="Font Color">
            <input type="color" value={fontColor} onChange={e => setFontColor(e.target.value)} />
          </InputGroup>

          <InputGroup label="Jersey Side">
            <select value={jerseySide} onChange={e => setJerseySide(e.target.value)}>
              <option value="Front">Front</option>
              <option value="Back">Back</option>
            </select>
          </InputGroup>

          <InputGroup label="Quantity">
            <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
          </InputGroup>

          <InputGroup label="Special Instructions">
            <textarea placeholder="Enter any notes..." value={notes} onChange={e => setNotes(e.target.value)} rows={3}></textarea>
          </InputGroup>

          <div className="customize-buttons">
            <button className="btn add-cart" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn save-design" onClick={handleSaveDesign}>Save Design</button>
          </div>

        </div>
      </div>
    </section>
  );
};

const InputGroup = ({ label, children }) => (
  <div className="input-group">
    <label>{label}</label>
    {children}
  </div>
);

export default Customize;
