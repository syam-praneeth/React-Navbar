// src/RootComponent.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Technologies from './Technologies';
import ReactJS from './ReactJS';
import Angular from './Angular';
import Vue from './Vue';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function RootComponent() {
  return (
    <Router>
      <Header />
      <div className="container mt-4" style={{ minHeight: '83vh' }}>
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
      <Footer />
    </Router>
  );
}

export default RootComponent;
