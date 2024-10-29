import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { id: "123", username: "Praneeth", password: "Praneeth" },
  { id: "124", username: "Raj", password: "Welcome" },
  { id: "125", username: "syam", password: "syam" },
  { id: "126", username: "Reddy", password: "Reddy" },
  { id: "127", username: "Raju", password: "Raju" }
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    
    if (user) {
      navigate('/profile'); 
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </div>
  );
};

export default Login;
