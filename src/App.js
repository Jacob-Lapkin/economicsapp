import "./App.css";
import Navbar from "./navbar/Navbar";
import Float from "./float/Float";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        </Routes>
        <Float />
      </Router>
    </>
  );
}

export default App;
