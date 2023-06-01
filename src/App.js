// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import About from './Components/About';
import CharactersPage from './Components/CharactersPage';
import Home from './Components/Home';
import Concepts from './Components/ConceptsPage';
import StartingPage from './Components/StartingPage';
import Character from './Components/Character';


function App() {
  return (
    <>
      {/* 
        Using a grid to organize the elements, borders, corners and a main area for the content
      */}
      <Character/>

      <div className="container">

        {/*Area where we will find the routes to the links */}
        <div className="mainarea">

            <Routes>
              <Route path='/' element={<StartingPage/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}/>  
              <Route path="charactersPage" element={<CharactersPage/>}/>   
              <Route path='concepts' element={<Concepts/>}/> 
            </Routes> 

        </div>
        {/* lateral zones - grid = 2 , 4 , 6 , 8*/}
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="right"></div>
        <div className="left"></div>
        {/* interface corners - grid = 1, 3 , 7 ,9 */}
        <div className="tl"></div>
        <div className="tr"></div>
        <div className="bl"></div>
        <div className="br"></div>
        
      </div>
    </>
  );
}

export default App;
