import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./AuthDrawer.css";

const API_URL = "https://script.google.com/macros/s/AKfycbyMaym4qYOfhRhzF7A7K9FbiSxG7hE77U_u2XLLslxs5hyB_3EMT0qvxwBoC2AGAsvb/exec";

export default function AuthDrawer({ open, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!email || !password || (!isLogin && !username)) {
      setMsg("Fill all fields");
      return;
    }
     console.log("LOGIN SEND:", email, password);
     

    try {
      // ✅ LOGIN
      if (isLogin) {
        const res = await fetch(
          `${API_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        );

        const data = await res.json();

        if (data.status === "success") {
          login({
            username: data.username,
            email: data.email
          });

          
          navigate("/dashboard");
          onClose();
        } else {
          setMsg("Invalid credentials");
        }
      }

      // ✅ REGISTER
      else {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({
            username,
            email,
            password
          })
        });

        const data = await res.json();

        if (data.status === "saved") {
          setMsg("Registered — now login");
          setIsLogin(true);
        } else if (data.status === "exists") {
          setMsg("Email already exists");
        } else {
          setMsg("Save failed");
        }
      }

    } catch (err) {
      console.error("FETCH ERROR:", err);
      setMsg("Server error");
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />

      <div className="drawer open">
        <button onClick={onClose}>✕</button>

        <h2>{isLogin ? "Login" : "Register"}</h2>

        {msg && <p className="error">{msg}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          style={{ cursor: "pointer", marginTop: 10 }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "New user? Register"
            : "Already have account? Login"}
        </p>
      </div>
    </>
  );
}
