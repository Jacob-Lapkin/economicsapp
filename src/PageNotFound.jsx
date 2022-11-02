import React from "react";
import image from './jumbotron/team.png'


function PageNotFound() {
    return (
        <div className="container-fluid d-flex justify-content-center p-5 flex-column">
            <div className="text-center p-4">
                <h1>404 Page Not Found</h1>
            </div>
            <div className="p-4 text-center">
                <img className="rounded shadow" src={image} height='300'/>
            </div>
        </div>
    )
}

export default PageNotFound