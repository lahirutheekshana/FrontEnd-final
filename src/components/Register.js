import React from 'react'
import {  useNavigate, Link } from 'react-router-dom';
import { FaUser , FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page reload
    // Add form validation or submission logic here
    navigate('/user-account'); // Navigate to the user account page
  };
  return (
    <div className="body">
    <div className='wrapper'>
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required />
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="email" placeholder='Email' required />
          <MdEmail className='icon'/>

        </div>

        <div className='input-box'>
          <input type="password" placeholder='Password' required />
          <FaLock className='icon'/>
        </div>

        <button className="submit">Register</button>
        <div className="register-link">
        <p>You have an account? <Link to="/login">Log in </Link></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Register
