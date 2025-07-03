import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="page">
      <div className="card">
        <p style={{ marginBottom: "10px" }}>
          Enter your email, phone, or username and we’ll send you a link to get back into your account.
        </p>

        <input type="text" placeholder="Email, Phone, or Username" className="inp1" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button disabled={email.trim() === ""} className={`btn2 ${email.trim() === "" ? "disabled" : ""}`}>
          Send login link
        </button>
      </div>
    </div>
  );
}

export default App;
