import './App.css';
import Navbar from './navbar/Navbar';
import Jumbotron from './jumbotron/Jumbotron';
import Card from './card/Card';
import data from './terms'
import { useState } from 'react';



function App() {
  const [search, setSearch] = useState('')
  const filterItems = data().filter((item)=>{
    return item.topic.toLowerCase().includes(search.toLowerCase())
  })
  function getData(term) {
    setSearch(term)
  }
  return (
    <>
    <Navbar/>
    <Jumbotron onChange={getData}/>
    <div className='row-cont'>
        <h3 className='text-center'>Topics selected from experts</h3>
      <div className='row'>
        {filterItems.map((termData)=>(
        <Card topic={termData.topic} description={termData.description} scope={termData.scope} image={termData.image}/>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
