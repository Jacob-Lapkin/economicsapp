import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./../navbar/Navbar.css";
import "./../App.css"
import image1 from './../images/about1.jpg'

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
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="row p-4">
            <div className="shadow rounded p-4 d-flex flex-row justify-content-around">
              <div className="d-flex flex-column justify-content-around">
              <h2>Welcome back, {user.first}</h2>
              <p className="text-secondary">Rating: {user.rating}/10</p>
              </div>
              <div>
              <img src={image1} height="150" className="rounded"/>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 p-4">

            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 p-4">

            </div>
          </div>
          <div className="row p-4">

          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
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
