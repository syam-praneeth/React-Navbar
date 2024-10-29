import React from 'react';
import './Sidebar.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
