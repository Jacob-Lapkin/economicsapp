import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="container-fluid p-2 align-items-center nav-wrapper">
        <div class="nav-cont d-flex justify-content-around">
          <div className="">
            <Link to="/" className="nav-link text-white fw-bold">
              Explore
            </Link>
          </div>
          <div className="">
            <Link to="/about" className="nav-link text-white fw-bold">
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
