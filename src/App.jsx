import React from "react";
// import Forget from "./Forget";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

import Create from "./Create";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/password/reset" element={<Forget />} /> */}
        <Route path="/Accounts/emailsignup" element={<Create/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
      
    </div>
  );
}

export default App;
