import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
  return (
    <div className="login-container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="text-center text-primary animate-header mb-4">Log In</h1>
      <form className="form-container p-4 bg-white rounded shadow-lg">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email or Username:</label>
          <input type="email" id="email" required className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" required className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary w-100 submit-btn">Log In</button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/Signup" className="text-primary">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
