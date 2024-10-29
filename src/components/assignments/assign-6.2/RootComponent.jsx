import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Technologies from './Technologies';
//import ReactJS from './ReactJS';
import Angular from './Angular';
import Vue from './Vue';
import 'bootstrap/dist/css/bootstrap.min.css';

function RootComponent() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Syam's Page</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Signin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technologies">Technologies</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/technologies" element={<Technologies />}>
            <Route path="react" element={<ReactJS />} />
            <Route path="angular" element={<Angular />} />
            <Route path="vue" element={<Vue />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RootComponent;
