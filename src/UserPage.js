import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";

const UserPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // yaha future me auth clear karna
    navigate("/");
  };

  return (
    <div className="user-page">
      <div className="user-card">
        <h1>Welcome 👋</h1>
        <p>Logged in successfully</p>

        <div className="user-info">
          <div>
            <label>Name</label>
            <span>Demo User</span>
          </div>

          <div>
            <label>Email</label>
            <span>demo@email.com</span>
          </div>
        </div>

        <div className="user-actions">
          <button onClick={() => navigate("/orders")}>
            My Orders
          </button>

          <button onClick={() => navigate("/wishlist")}>
            Wishlist
          </button>
<button onClick={() => navigate("/dashboard")}>
  Open Dashboard
</button>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
