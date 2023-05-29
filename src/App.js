// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import About from './Components/About';
import CharactersPage from './Components/CharactersPage';
import Home from './Components/Home';
import Concepts from './Components/ConceptsPage';
import StartingPage from './Components/StartingPage';


function App() {
  return (
    <>
      {/* Usar uma grid para organizar os elementos, bordas, cantos e uma área principal para o conteudo */}
      <div className="container">

        {/* Área onde se encontra as rotas para os vários links - grid  = 5*/}
        <div className="mainarea">
            <Routes>
              <Route path='/' element={<StartingPage/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}/>  
              <Route path="charactersPage" element={<CharactersPage/>}/>   
              <Route path='concepts' element={<Concepts/>}/> 
            </Routes> 
        </div>
        {/* Zonas laterais - grid = 2 , 4 , 6 , 8*/}
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="right"></div>
        <div className="left"></div>
        {/* Cantos da interface - grid = 1, 3 , 7 ,9 */}
        <div className="tl"></div>
        <div className="tr"></div>
        <div className="bl"></div>
        <div className="br"></div>
        
      </div>
          
          
      

      
    </>
  );
}

export default App;
