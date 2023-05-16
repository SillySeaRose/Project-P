// import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import About from './Components/About';
import CharactersAndConcepts from './Components/CharactersAndConcepts';
import Home from './Components/Home';


function App() {
  return (
    <>
      <div className="App">
          <nav>
          <Link className='' to="/home">
              Home
           </Link> 
           <Link to="/about">
              About
           </Link> 
           <Link to="/charactersAndConcepts">
              CharactersAndConcepts
           </Link> 
          </nav>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>  
              <Route path="charactersAndConcepts" element={<CharactersAndConcepts/>}/>    
            </Routes> 

      </div>
    </>
  );
}

export default App;
