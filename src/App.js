import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Shop2 from "./components/shop2";
import Footer from "./components/Footer";
import Login from "./components/Login";
function App() {

  const currentLocation = useLocation();
  console.log("path"+currentLocation.pathname)
  // Check if the current location is the login page
  const isLoginPage = currentLocation.pathname === "/login";

  return (
    <>
    {(!isLoginPage)&& <Navbar />}
    <Routes>
    <Route path="/" element={<Home />} exact></Route>
    {/* Added route for the root path */}
    <Route path="/about" element={<About />} exact></Route>
    <Route path="/shop" element={<Shop />} exact></Route> 
    <Route path="/shop2" element={<Shop2 />} exact></Route> 
    <Route path="/contact" element={<Contact />} exact></Route>
    <Route path="/login" element={<Login />} exact></Route>
  </Routes>
  {(!isLoginPage)&&<Footer/>}
  </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;




