import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./../navbar/Navbar.css";
import "./../App.css"
import Welcome from "../homepage/Welcome";
import News from "../homepage/News";

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
      <div className="dash-cont">
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="row p-4">
          <Welcome first={user.first}  rating={user.rating}/>
          </div>
          <div className="row p-4">
            <News/>
          </div>
          <div className="row p-4">

          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="row p-4">

          </div>
          <div className="row p-4">
            
          </div>
          <div className="row p-4">

          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default Homepage;
