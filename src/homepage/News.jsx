import React from "react";
import { useState, useEffect } from "react";
import './News.css'
import image from './../images/about1.jpg'

function News() {
  const [news, setNews] = useState();

  useEffect(() => {}, []);

  return (
  <>
  <div className="news-cont rounded shadow p-3">
  <div className="search-container">
          <input
            placeholder="Search news"
            className="search-widget"
          />
        </div>
    <div className="headline">
        <p className="h5 fw-bold">This just happened in the top news because you might want to check it out</p>
    </div>
    <img className='image rounded' src={image}/>
    
  </div>
  
  </>);
}

export default News
