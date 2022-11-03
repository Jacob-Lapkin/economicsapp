import React from "react";

function Welcome(props) {
  return (
    <>
      <div className="shadow rounded text-center p-5">
        <div className="text-center">
          <h2>Welcome back, {props.first}</h2>
          <p className="text-secondary">Rating: {props.rating}/10</p>
        </div>
        
      </div>
    </>
  );
}

export default Welcome