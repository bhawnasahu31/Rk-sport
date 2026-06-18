import React, { useEffect, useState } from "react";
import "./OrderHistory.css";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setOrders(data);
  }, []);

  const handleRemove = (id) => {
    const updated = orders.filter(o => o.id !== id);
    setOrders(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  return (
    <div className="page">
      <h2>Order History</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      <div className="order-grid">
        {orders.map(o => (
          <div className="list-card" key={o.id}>
            <img src={o.previewImage} alt="" style={{ width: "150px", marginBottom: "10px" }} />
            <b>{o.selectedSport} Order #{o.id}</b>
            <p>Name: {o.name || "PLAYER"}</p>
            <p>No: {o.number || "00"}</p>
            <p>Size: {o.size}</p>
            <p>Qty: {o.quantity}</p>
            <button onClick={() => handleRemove(o.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
