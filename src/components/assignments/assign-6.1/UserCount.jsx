import React from 'react';

function UserCount({ count }) {
  return (
    <div className="alert alert-info mt-4">
      <h4>Current User Count: {count}</h4>
    </div>
  );
}

export default UserCount;
