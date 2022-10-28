import React from "react";
import "./Navbar.css";
import logo from "./book.png";

function Navbar() {
  return (
    <>
      <nav className="container-fluid p-2 align-items-center nav-wrapper">
        <div class="nav-cont d-flex justify-content-around">
          <div className="">
            <a className="nav-link text-white fw-bold">Explore</a>
          </div>
          <div className="">
            <a className="nav-link text-white fw-bold">Learn</a>
          </div>
          <div className="">
            <a className="nav-link text-white fw-bold">Quiz</a>
          </div>
        </div>
      </nav>
      <div className="account-wrapper">
        <button class='account-icon'>
          <i class="fa-solid fa-book fa-2x user-icon"></i>
        </button>
      </div>
    </>
  );
}

export default Navbar;
