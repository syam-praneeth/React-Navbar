import React, { useState } from 'react';

function AddUser({ onAddUser }) {
  const [user, setUser] = useState({ username: '', email: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = onAddUser(user);

    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError('');
      setUser({ username: '', email: '' });
    }
  };

  return (
    <div className="card p-3 mt-4">
      <h3 className="text-center">Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add User
        </button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}

export default AddUser;
