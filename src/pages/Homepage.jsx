import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'


function Homepage(props) {
  const navigate = useNavigate();
  const [myuser, setMyuser] = useState()

  function logout() {
    localStorage.clear("token");
    props.setLoggedout();
    navigate("/login");
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

  if (!myuser) {
    return 
  }
  return (

    <>
      <h1>Hello World {myuser.first}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Homepage;
