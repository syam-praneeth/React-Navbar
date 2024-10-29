import { Link, Outlet } from 'react-router-dom';

function Technologies(){
  return (
    <div className="text-center">
      <h1 className="display-4">Technologies</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="react" className="btn btn-outline-info">ReactJS</Link>
        </li>
        <li className="list-group-item">
          <Link to="angular" className="btn btn-outline-danger">Angular</Link>
        </li>
        <li className="list-group-item">
          <Link to="vue" className="btn btn-outline-success">Vue</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Technologies;
