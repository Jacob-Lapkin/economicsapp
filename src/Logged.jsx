import React from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import Navlogged from "./navbar/Navlogged";

function Logged(props) {
    const [loggedOut, setLoggedOut] = useState()
    const [myuser, setMyuser] = useState()

    function setLoggedout() {
        setLoggedOut(false)
        props.setlogout()
    }

    async function getUser() {
      const url='http://127.0.0.1:5000/home'
      try {
          const response = await fetch(url, {
              'method':"GET", 
              'headers':{
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                  'Content-Type':"application/json"
              }
          })
          const data = await response.json()
          setMyuser(data)
  
      } catch(error) {
          console.log(error)
      }
    }

    useEffect(()=>{
      getUser()
    }, [])

  return (
    <>
    <Navlogged/>
    <Routes>
      <Route exact path="/home" element={<Homepage user={myuser} setLoggedout={setLoggedout}/>}></Route>
    </Routes>
    </>
  );
}

export default Logged;
