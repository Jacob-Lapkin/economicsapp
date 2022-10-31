import React from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import {useState} from 'react'

function Logged(props) {
    const [loggedOut, setLoggedOut] = useState()
    function setLoggedout() {
        setLoggedOut(false)
        props.setlogout()
    }
  return (
    <>
    <Routes>
      <Route exact path="/home" element={<Homepage setLoggedout={setLoggedout}/>}></Route>
    </Routes>
    </>
  );
}

export default Logged;
