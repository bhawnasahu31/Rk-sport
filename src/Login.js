import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Login.css";

const API_URL = "https://script.google.com/macros/s/AKfycbyMaym4qYOfhRhzF7A7K9FbiSxG7hE77U_u2XLLslxs5hyB_3EMT0qvxwBoC2AGAsvb/exec";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${API_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      );

      const data = await res.json();

      if (data.status === "success") {
        login({
          username: data.username,
          email: data.email
        });

        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }

    } catch (err) {
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>User Login</h2>

        {error && <p className="error">{error}</p>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
}
