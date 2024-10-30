import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <h1 className="text-center text-primary animate-header">Sign Up</h1>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" required className="form-input" />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
