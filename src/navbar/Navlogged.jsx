import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navlogged() {
    const [active, setActive] = useState(true)

    function minimize() {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }
    return (
        <div className={active?"d-flex justify-content-around flex-column align-items-center navlog-wrapper":" text-center align-items-center navlog-wrapper minimize"}>
          <div className="">
            <button className="min-button" onClick={(minimize)}>
            <i className="fa-solid fa-window-minimize fa-2x"></i>
            </button>
          </div>
          <div className="pt-3">
            <Link to="/home" className="nav-link text-white fw-bold">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="pt-3">
            <Link to="" className="text-white fw-bold">
              <i class="fas fa-chart-pie fa-2x"></i>
            </Link>
          </div>
          <div className="pt-3">
            <Link to="" className="text-white fw-bold">
            <i class="fa-solid fa-graduation-cap fa-2x"></i>
            </Link>
          </div>
          <div className="pt-3">
            <Link to="" className="text-white fw-bold">
              <i class="fas fa-toolbox fa-2x"></i>
            </Link>
          </div>
      </div>
    )
}

export default Navlogged