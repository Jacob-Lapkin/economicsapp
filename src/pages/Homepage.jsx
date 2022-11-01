import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import './../navbar/Navbar.css'

function Homepage(props) {
  const user = props.user;
  const navigate = useNavigate();

  function logout() {
    localStorage.clear("token");
    props.setLoggedout();
    navigate("/login");
  }

  if (!user) {
    return;
  }
  return (
    <>
      <button className="logout" onClick={logout}>
      <i class="fa-solid fa-door-open fa-2x"></i>
      </button>
    </>
  );
}

export default Homepage;
