import Navbar from "./navbar/Navbar";
import Float from "./float/Float";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function Landing(props) {
const [loggedin, setLoggedin] = useState()
function setLoggin() {
    setLoggedin(true)
    props.setLogin()
}
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login setLoggin={setLoggin}/>}></Route>
      </Routes>
      <Float />
    </>
  );
}

export default Landing;