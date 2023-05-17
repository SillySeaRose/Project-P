// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import About from './Components/About';
import CharactersAndConcepts from './Components/CharactersAndConcepts';
import Home from './Components/Home';
import Concepts from './Components/Concepts';


function App() {
  return (
    <>
      <div className="container">

        <div className="mainarea">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>  
              <Route path="charactersAndConcepts" element={<CharactersAndConcepts/>}/>   
              <Route path='concepts' element={<Concepts/>}/> 
            </Routes> 
        </div>

        <div className="top"></div>
        <div className="bottom"></div>
        <div className="right"></div>
        <div className="left"></div>
        
        <div className="tl"></div>
        <div className="tr"></div>
        <div className="bl"></div>
        <div className="br"></div>
        
      </div>
          
          
      

      
    </>
  );
}

export default App;
