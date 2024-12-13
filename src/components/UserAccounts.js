import React from 'react';
import './UserAccounts.css';

function UserAccounts() {
  return (
    <div className="user-account">
      <div className="profile-section">
        <h1>Edit Profile</h1>
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          <button className="update-btn">Update Profile Picture</button>
        </div>
      </div>
      <form className="profile-form">
        <div className="input-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name" />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div className="input-group">
          <label>Contact Number</label>
          <input type="tel" placeholder="Enter Contact Number" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="button-group">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserAccounts;
