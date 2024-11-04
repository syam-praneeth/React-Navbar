import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <h1 className="text-primary">Sign Up</h1>
      <form className="form-container">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-control" required />
        </div>
        <button type="submit" className="btn submit-btn">Sign Up</button>
      </form>
      <p className="mt-3">
        Already registered? <Link to="/login" className="text-primary">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
