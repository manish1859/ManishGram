// import React,{ useState }  from 'react'
// import {  useNavigate } from 'react-router-dom';
// import './Create.css'

// const Create = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [fullname,setFullname] =useState('');
//     const [username,setUsername]=useState('');
//     const navigate=useNavigate()

//     const create = ()=>{
//       navigate('/home'); 
//     }

//   return (
//     <div className='create-page'>
//       <div className="create-card">
//         <h1 className='h1'>Manishgram</h1>
//         <p className='p1'>Sign up to see photos and videos from your friends.</p>
//         <p className='p2'>OR</p>
//         <hr/>
//         <input type="text" placeholder="Mobile Number Or Email"className="input-field"value={email} onChange={(e) => setEmail(e.target.value)}/>
//         <input type="Password" placeholder="Password"className="input-field"value={password} onChange={(e1) => setPassword(e1.target.value)}/>
//         <input type="text" placeholder="Full Name"className="input-field"value={fullname} onChange={(e2) => setFullname(e2.target.value)}/>
//         <input type="text" placeholder="Username"className="input-field"value={username} onChange={(e3) => setUsername(e3.target.value)}/>


//        <button  disabled={ email.trim() === "" || password.trim() === "" ||fullname.trim() === "" || username.trim() === ""} className={`send-link-btn ${ email.trim() === "" ||  password.trim() === "" ||  fullname.trim() === "" ||  username.trim() === ""  ? "disabled"  : ""}`} onClick={create}>
//         Sign in
//        </button>



    
//       </div>
      
//     </div>
//   )
// }

// export default Create


// src/Create.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const handleCreate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/create", { email, password });
   
  //     console.log("Response:", res.data);
  //   } catch (err) {
  //     console.error("API Error:", err);
  //   }
  // };
  const checkMatch = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/check', {
      name: "manish",
      password: "manish",
    });
    console.log(res.data.message);
  } catch (error) {
    console.error("API Error:", error);
  }
};


  return (
    <form onSubmit={checkMatch}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Create</button>
    </form>
  );
};

export default Create;
