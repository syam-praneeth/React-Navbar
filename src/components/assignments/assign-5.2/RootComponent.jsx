import React, { useState } from 'react';
import Adduser from './Adduser';

function RootComponent() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <h2 className="text-center text-primary">User Registration</h2>
        <Adduser onAddUser={addUserHandler} />
      </div>

      <h2 className="mt-4 text-success">List of Users</h2>
      {users.length > 0 ? (
        <table className="table table-striped table-hover table-bordered mt-2">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Date of Birth</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.dob}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-muted">No users added yet.</p>
      )}
    </div>
  );
}

export default RootComponent;
