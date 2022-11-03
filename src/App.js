import "./App.css";
import Landing from "./Landing";
import Logged from "./Logged";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { isJwtExpired } from 'jwt-check-expiration';


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

  
  function checkExpired() {
    if (token) {
      if(isJwtExpired(token)) {
        setLoggedIn(false)
        console.log("logged out because expire")
      } else {
        setLoggedIn(true)
        console.log("logged in because active")
      }
    } else {
      console.log("no token")
    }
  }


  useEffect(()=>{
    checkExpired()
  }, [])

  return (
    loggedIn?<Logged setlogout={setlogout}/>:<Landing setLogin={setLogin}/>
    // <Landing/>
  );
}

export default App;
