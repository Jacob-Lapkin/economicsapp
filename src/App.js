import './App.css';
import Navbar from './navbar/Navbar';
import Jumbotron from './jumbotron/Jumbotron';
import Card from './card/Card';
import data from './terms'

function App() {
  function getData(term) {
    console.log(term)
  }
  return (
    <>
    <Navbar/>
    <Jumbotron onChange={getData}/>
    <div className='row-cont'>
      <div className='row'>
        {data().map((termData)=>(
        <Card topic={termData.topic} description={termData.description} scope={termData.scope}/>

        ))}
      </div>
    </div>
    </>
  );
}

export default App;
