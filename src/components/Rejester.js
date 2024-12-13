import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser , FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {
  return (
    <body className="body">
    <div className='wrapper'>
      <form action=''>
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
    </body>
  );
};

export default RegisterForm;
