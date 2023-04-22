import './App.css';
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Houses from './pages/Houses/Houses';
import Cronology from './pages/Cronology/Cronology';
import { CharactersContext } from './shared/characters.context';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [ characters , setCharacters ]= useState([]);
  useEffect(() => {
    axios.get('https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=964').then(res => {
      setCharacters(res.data.data)
    })
  }, []);

  return (
    <CharactersContext.Provider value={{characters, setCharacters}}> 
      <div className="app">

      
        <Router>
          {/* <div className='nv'>
            <nav className='nav'>
              <Link className="nav__link" to="/characters"> Characters </Link>
              <Link className="nav__link" to="/houses"> Houses </Link>
              <Link className="nav__link" to="/cronology"> Cronology </Link>
            </nav>
          </div> */}

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/characters" element={<Characters />}></Route>
            <Route path="/houses" element={<Houses />}></Route>
            <Route path="/cronology" element={<Cronology />}></Route>
          </Routes>
        </Router>
      </div>
    </CharactersContext.Provider>
  );
}

export default App;
