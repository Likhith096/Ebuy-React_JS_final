import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Shop from "./components/shop";
import Contact from "./components/contact";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} exact></Route>{" "}
    {/* Added route for the root path */}
    <Route path="/about" element={<About />} exact></Route>
    <Route path="/shop" element={<Shop />} exact></Route> 
    <Route path="/contact" element={<Contact />} exact></Route>
  </Routes>
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