import React from "react";
import "./../App.css";
import JumbotronTwo from "./../jumbotron/Jumbotronabout";
import image1 from './../images/about1.jpg'

function About() {
  return (
    <>
      <JumbotronTwo />
      <div className="page-cont">
        <div className="mt-4">
          <h3 className="text-center">Our Team</h3>
          <h6 className="text-center text-secondary">
            specialist tailored to your future goals
          </h6>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-4 col-sm-12 col-lg-4 p-3">
            <div className="about-border rounded shadow p-3 text-center">
              <h3>Jacob Lapkin</h3>
              <div className="mt-5 mb-5">
                <i className="fa fa-user fa-4x" aria-hidden="true"></i>
              </div>
              <div>
                <h6>Masters, Computer Science</h6>
                <h6 className="text-secondary">University College London</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 p-4">
            <div className="text-center duo-cont p-4">
              <h5 class="text-main">
                Han Salo and Chubaka, Mick Jagger and Keith Richards, and now
                the next best duo in education. Interpersonal mixed with
                brilliance available at all times.
              </h5>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 p-3">
            <div className="about-border rounded shadow p-3 text-center">
              <h3>Julia Thomas</h3>
              <div className="mt-5 mb-5">
                <i className="fa fa-user fa-4x" aria-hidden="true"></i>
              </div>
              <div>
                <h6>Bachelors, International Relations </h6>
                <h6 className="text-secondary">University of Sydney</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 mt-5">
        <div className="page-cont">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <h3>Why get started</h3>
              <p>Everyday we accept the results of the world without asking questions. Would it not be better to understand there reasons behind interest rates, or even 
                what is causing your rent price to increase?
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <img src={image1} className='rounded shadow'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
