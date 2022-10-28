import React from "react";
import './Float.css'
import { useState } from "react";

function Float() {
    const [status, setStatus] = useState()
    function changeStatus() {
        if (status) {
            setStatus(false)
        } else {
            setStatus(true)
        }
    }
  return (
    <>
      <div className="account-wrapper">
        <div className={status?"float-div":""}>

        </div>
        <button class={status?"account-icon active":"account-icon"} onClick={changeStatus}>
          <i class="fa-solid fa-book fa-2x user-icon"></i>
        </button>
      </div>
    </>
  );
}


export default Float