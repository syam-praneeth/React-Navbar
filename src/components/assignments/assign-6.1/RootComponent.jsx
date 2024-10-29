import React, { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import UserCount from './UserCount';

function RootComponent() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    const userExists = users.some(user => user.username === newUser.username);

    if (userExists) {
      return "Duplicate username";
    } else {
      setUsers((prevUsers) => [...prevUsers, newUser]);
      return null;
    }
  };

  const deleteUserHandler = (username) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.username !== username));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">User Management App</h2>

      <AddUser onAddUser={addUserHandler} />

      <UserCount count={users.length} />

      <UserList users={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default RootComponent;
