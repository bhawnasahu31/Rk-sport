import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGift, FaTicketAlt } from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username") || "User";

  return (
    <div className="dash">
      <h2>Welcome {user} 👋</h2>

      <div className="dash-grid">

        <Card 
          title="Orders" 
          desc="Track & manage your orders"
          go={() => navigate("/orders")} 
        />

        <Card 
          title="Saved Designs" 
          desc="View your saved jersey designs"
          go={() => navigate("/designs")} 
        />

        <Card 
          title="Rewards" 
          desc="Check your reward points"
          icon={<FaGift />}
          // go={() => navigate("/rewards")} 
        />

        <Card 
          title="Coupons" 
          desc="View & apply coupon codes"
          icon={<FaTicketAlt />}
          // go={() => navigate("/coupons")} 
        />

        <Card 
          title="Profile Edit" 
          desc="Update your profile details"
          go={() => navigate("/profile")} 
        />

        {localStorage.getItem("role") === "admin" && (
          <Card 
            title="Admin Panel" 
            desc="Manage products & users"
            go={() => navigate("/admin")} 
          />
        )}

      </div>
    </div>
  );
}

function Card({ title, desc, go, icon }) {
  return (
    <div className="dash-card" onClick={go}>
      <div className="dash-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="dash-link">Open section →</span>
    </div>
  );
}
