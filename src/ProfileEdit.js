import React, { useState, useEffect } from "react";
import "./ProfileEdit.css";

export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Load existing profile from localStorage
    setName(localStorage.getItem("username") || "");
    setEmail(localStorage.getItem("email") || "");
    setPassword(localStorage.getItem("password") || "");
  }, []);

  const save = () => {
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    if (password) localStorage.setItem("password", password);
    
    // Show success message
    setSuccess(true);

    // Hide message after 2 seconds
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Edit Profile</h2>

        <form className="profile-form" onSubmit={e => { e.preventDefault(); save(); }}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter new password (optional)"
            />
          </div>

          <button type="submit" className="save-btn">Save Changes</button>
        </form>

        {success && <p className="success-msg">Profile updated successfully!</p>}
      </div>
    </div>
  );
}
