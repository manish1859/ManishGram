import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import "./Forget.css";

function Forget() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSendLink = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/forget", {
        email,
      });
      setMessage(res.data.message); // Server se aaya message
      setEmail(""); // Input clear
    } catch (error) {
      console.error("API Error:", error);
      setMessage("Failed to send reset link.");
    }
  };

  const Create = () => {
    navigate("/Accounts/emailsignup");
  };

  return (
    <div className="forget-page">
      <div className="forget-card">
        <h2 className="ha1">Trouble logging in?</h2>
        <p className="description">
          Enter your email, phone, or username and we’ll send you a link to get back into your account.
        </p>

        <input
          type="text"
          placeholder="Email, Phone, or Username"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          disabled={email.trim() === ""}
          className={`send-link-btn ${email.trim() === "" ? "disabled" : ""}`}
          onClick={handleSendLink}
        >
          Send login link
        </button>

        {message && <p className="success-message">{message}</p>}

        <p className="p1">OR</p>
        <hr />
        <div>
          <button onClick={Create} className="bn2">
            Create a new account
          </button>
        </div>
        <button className="bn3" onClick={handleBack}>
          Back to login
        </button>
      </div>
    </div>
  );
}

export default Forget;
