import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.username.length < 4 || formData.username.length > 8) {
      newErrors.username = 'Username must be between 4 and 8 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = 'Passwords do not match.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newUser = {
        username: formData.username,
        password: formData.password
      };
      try {
        await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
        });
        setSuccess('User registered successfully!');
        setErrors({});
        setFormData({ username: '', password: '', confirmPassword: '' });
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
