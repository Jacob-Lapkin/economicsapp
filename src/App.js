import "./App.css";
import Landing from "./Landing";
import Logged from "./Logged";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState()
  function setLogin() {
    setLoggedIn(true)
    console.log('parent Login')
  }
  function setlogout() {
    setLoggedIn(false)
  }
  return (
    loggedIn?<Logged setlogout={setlogout}/>:<Landing setLogin={setLogin}/>
    // <Landing/>
  );
}

export default App;
