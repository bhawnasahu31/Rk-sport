import React from "react";

export default function DesignGallery() {
  const designs = JSON.parse(localStorage.getItem("savedDesigns") || "[]");

  return (
    <div className="page">
      <h2>Design Gallery</h2>

      <div className="gallery">
        {designs.map((d,i)=>(
          <div key={i} className="gallery-card">
            <div style={{background:d.color,height:120}} />
            <p>{d.name} #{d.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
