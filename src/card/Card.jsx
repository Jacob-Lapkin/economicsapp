import React from "react";
import './Card.css'

function Card(props) {
    return (
        <>
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
        <div className="card card-frame shadow m-auto">
            <img src={props.image} className="card-img-top" height='300' alt="..."/>
            <div className="card-body">
                <p className="h5 text-primary">{props.topic}</p>
                <p className="card-text">{props.description}</p>
                <p className='scope'>{props.scope}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Card