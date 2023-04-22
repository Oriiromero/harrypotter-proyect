import './App.css';
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Cronology from './pages/Cronology/Cronology';
import { CharactersContext } from './shared/characters.context';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Organizations from './pages/Organizations/Organizations';
import OrganizationDetail from './pages/OrganizationDetail/OrganizationDetail';


function App() {
  const [ characters , setCharacters ]= useState([]);
  const [ organizations , setOrganizations] = useState([]);
  useEffect(() => {
    axios.get('https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=964').then(res => {
      setCharacters(res.data.data)
    })
    axios.get('https://starwars-databank-server.vercel.app/api/v1/organizations?page=2&limit=135').then(res => {
      setOrganizations(res.data.data)
      console.log(res.data);
    })
  }, []);

  return (
    <CharactersContext.Provider value={{characters, setCharacters , organizations , setOrganizations}}> 
    
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/characters" element={<Characters />}></Route>
            <Route path="/organizations" element={<Organizations />}></Route>
            <Route path="/cronology" element={<Cronology />}></Route>
            <Route path='/characters/character-detail' element={<CharacterDetail />} ></Route>
            <Route path='/organizations/organization-detail' element={<OrganizationDetail />}></Route>
          </Routes>
        </Router>
 
    </CharactersContext.Provider>
  );
}

export default App;
