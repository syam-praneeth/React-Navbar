import React, { useState } from 'react';

function Adduser({ onAddUser }) {
  const [user, setUser] = useState({
    username: '',
    dob: '',
    city: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, dob, city } = user;

    if (!username || !dob || !city) {
      return 'All fields are mandatory!';
    }
    if (username.length < 4 || username.length > 8) {
      return 'Username should have a minimum of 4 and a maximum of 8 characters!';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();

    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError('');
      onAddUser(user);
      setUser({ username: '', dob: '', city: '' });
    }
  };

  return (
    <div className="mt-3">
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
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter city"
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

export default Adduser;
