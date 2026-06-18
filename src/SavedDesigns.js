import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SavedDesigns.css";

export default function SavedDesigns() {
  const [designs, setDesigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadDesigns();
  }, []);

  const loadDesigns = () => {
    const data = JSON.parse(localStorage.getItem("savedDesigns") || "[]");
    setDesigns(data);
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    const updated = designs.filter(d => d.id !== id);
    setDesigns(updated);
    localStorage.setItem("savedDesigns", JSON.stringify(updated));
  };

  // ✅ EDIT
  const handleEdit = (design) => {
    localStorage.setItem("editDesign", JSON.stringify(design));
    navigate("/customize"); // route name same rakho
  };

  return (
    <div className="page">
      <h2>Saved Designs</h2>

      <div className="saved-grid">
        {designs.map((d) => (
          <div className="list-card" key={d.id}>
            <img src={d.selectedJersey} alt="jersey" />

            <p><b>{d.name}</b> #{d.number}</p>
            <p>Size: {d.size} | Qty: {d.quantity}</p>
            <span className="sport-badge">{d.selectedSport}</span>

            <div className="card-actions">
              <button onClick={() => handleEdit(d)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => handleDelete(d.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
