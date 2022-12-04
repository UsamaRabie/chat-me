import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signin = () => {
   const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
   <div className="formContainer">
    <div className="formWrapper">
        <form onSubmit={handleSubmit}>
            <p className='logo'>Chat me كلمني</p>
            <p className='title'>Sign In</p>
            
            <input type="email" placeholder='Enter your E mail' required/>
            <input type="password" placeholder='Enter your password' required/> 
            
            <button className="btn bg-success rounded-5">Sign In</button>
            {err && <span>Something went wrong</span>}
        </form>
       <p>You don't have an account? <Link to="/register">Sign up</Link></p>
    </div>
   </div>
  )
}

export default Signin;