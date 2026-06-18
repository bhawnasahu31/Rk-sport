import React from "react";

export default function CartSummary() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const total = cart.reduce((s,i)=> s + i.price*i.qty, 0);

  return (
    <div className="page">
      <h2>Cart Summary</h2>

      {cart.map(i => (
        <div key={i.id} className="list-card">
          {i.name} × {i.qty} = ₹{i.price*i.qty}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
