import React from "react";
import { useState, useEffect } from "react";
import './News.css'
import image from './../images/about1.jpg'

function News() {
  const [news, setNews] = useState();

  async function getNews() {
    try {
      const response = await fetch('http://127.0.0.1:5000/news',{
        methods:"GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await response.json()
      console.log(data)
      setNews(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNews()
  }, []);

  if (!news) return 

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
        <p className="h5 fw-bold text-white">{news.articles.title}</p>
        <div className="d-flex flex-row gap-3">
        <p className="text-light mt-3">{news.articles.author}</p>
        <p className="text-white mt-3">|</p>
        <p className="text-light mt-3">{news.articles.publishedAt.slice(0,10)}</p>
        </div>
    </div>
    <div className="button-div">
      <a href={news.articles.url} className="link-primary">Learn More</a>
    </div>
    <img className='image rounded' src={news.articles.urlToImage}/>
    
  </div>
  
  </>);
}

export default News
