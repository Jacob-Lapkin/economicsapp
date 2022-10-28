import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
        <div className="card-frame shadow m-auto">
          <img
            src={props.image}
            className="card-image"
            alt="..."
          />
          <div className="card-body">
            <p className="h5 topic">{props.topic}</p>
            <p className="card-text">{props.description}</p>
            <p className="scope">{props.scope}</p>
            <button className="learn-more">learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
