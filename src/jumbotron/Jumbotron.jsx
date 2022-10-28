import "./Jumbotron.css";
import React from "react";
import { useRef } from "react";

function Jumbotron(props) {
  let term = useRef("");
  function settingTerm(e) {
    props.onChange(term.current.value);
  }

  return (
    <>
      <div className="jumbo-container">
        <div className="title-div">
          <p>Economics learning with a touch of fun</p>
        </div>
        <div className="search-container">
          <input
            ref={term}
            onChange={settingTerm}
            placeholder="Search subject"
            className="search-widget"
          />
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
