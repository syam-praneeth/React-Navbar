import React from 'react';

function UserList({ users, onDeleteUser }) {
  return (
    <div className="mt-4">
      <h3>Users List</h3>
      {users.length > 0 ? (
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteUser(user.username)}
                  >
                    Delete
                  </button>
                </td>
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

export default UserList;
