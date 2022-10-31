import React from "react";
import {useNavigate} from 'react-router-dom'

function Homepage(props) {
    const navigate = useNavigate()
  function logout() {
    localStorage.clear("token");
    props.setLoggedout()
    navigate('/login');

  }
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Homepage;
