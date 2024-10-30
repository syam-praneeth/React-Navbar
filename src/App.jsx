// //import { FcCustomerSupport } from "react-icons/fc"; 
// // import {Form} from "./components/Form"
// // import Navbar from "./components/assignments/assign-3/Navbar"; 2.2
// // import Footer from "./components/assignments/assign-3/Footer"; 2.2
// // import Users from "./components/assignments/assign-3/Users"; 2.2
// //import Notion from "./components/assignments/assign-2.2/Notion";
// //import Counter from "./components/assignments/assign-3/Counter";
// //import User from "./components/assignments/assign-4.1/Usercount";
// //import Parent from "./components/assignments/assign-4.2/Parent"
// //import Adduser from "./components/assignments/assign-5.2/AddUser";
// //import RootComponent from "./components/assignments/assign-7/RootComponent";
// //import Root from "./components/assignments/assign-8/Root";
// import Login from "./projects/navbar/Login";
// import Navbar from "./projects/navbar/Navbar";
// //import Form from "./components/assignments/assign-5.1/Form";
// function App() {
//   return (
//     <div>
//       {/* <Navbar/>
//       <Users/>
//       <Footer/> 
//       <Notion/>
//       <Counter />*/}
//       {/* <Navbar/> */}
//       <Login/>
//     </div>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./projects/navbar/Login";
import Navbar from "./projects/navbar/Navbar";
import Signup from './projects/navbar/Signup';
import Home from './projects/navbar/Home';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
