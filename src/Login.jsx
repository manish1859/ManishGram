import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './Login.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();

    const savedName = localStorage.getItem("savedName");
    const savedPassword = localStorage.getItem("savedPassword");

    if (!savedName || !savedPassword) {
      localStorage.setItem("savedName", name);
      localStorage.setItem("savedPassword", password);
      localStorage.setItem("loggedInUser", name);
      setMessage("Login successful (first time)");
      navigate('/home');
    } else {
      if (name === savedName && password === savedPassword) {
        localStorage.setItem("loggedInUser", name);
        navigate('/home');
      } else {
        setMessage("Sorry, your password was incorrect. Please double-check your password.");
      }
    }
  };

  const handleForget = () => {
    localStorage.removeItem("savedPassword");
    setPassword("");
    navigate('/password/reset');
  };

  return (
    <div className="page">
      <div className="card" style={{ border: 'none' }}>
        <h2 className="logo">Manishgram</h2>
        <form onSubmit={handleLogin} className="form">
          <input
            type="text"
            placeholder="Phone number, username or email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inp1"
          />

          <div className="input-wrapper">
            <input
              type={show ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="inp1"
              value={password}
            />
            {password && (
              <button type="button" onClick={() => setShow(!show)} className="btn1">
                {show ? <FaEye /> : <FaEyeSlash />}
              </button>
            )}
          </div>

          <button type="submit" disabled={name.trim() === '' || password.trim() === ''} className="btn2">
            Log In
          </button>
          <p className="or">OR</p>
        </form>

        {message && <p className="ms1">{message}</p>}
        <hr className="hr1" />

        <button onClick={handleForget} className="forget">
          Forget Password
        </button>
      </div>
    </div>
  );
};

export default Login;
