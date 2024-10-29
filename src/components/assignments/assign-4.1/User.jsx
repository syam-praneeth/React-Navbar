import { useEffect, useState } from "react";

function User(props) {
  let [usersList, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 4)); 
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="m-4">
      <p className="text-center display-5 text-primary" >User Count: {props.count}</p>
      <button onClick={props.handleReset} className="m-3 text-center btn btn-success">Reset Conuter</button>
      <div className="row">
        {usersList.map((userobj) => (
          <div className="col-md-3 mb-4" key={userobj.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{userobj.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{userobj.username}</h6>
                <p className="card-text">Email: {userobj.email}</p>
                <p className="card-text">Phone: {userobj.phone}</p>
                <button className="btn btn-warning" onClick={props.handleCount}>
                  Increment Count
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
