import React from 'react';
import './Login.css';

function Login(){
  return (
    <div className="login-container">
      <h1 className="text-center text-primary animate-header">Log In</h1>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email or Username:</label>
          <input type="email" id="email" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" required className="form-input" />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">Log In</button>
      </form>
    </div>
  );
};

export default Login;
