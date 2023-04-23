import React, { useContext, useEffect, useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import { CharactersContext } from '../../shared/characters.context';
import homeIcon from '../../assets/home-icon.png'
import lupa from '../../assets/lupa.png'
import './characters.css';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

const Characters = () => {
  const  { characters } = useContext(CharactersContext);
  const [filteredChars, setFilteredChars] = useState([]);

  const onFilter = (e) => {
    const filteredCharac = characters.filter((character)=> character.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredChars(filteredCharac);
  }

  useEffect(()=> {
    setFilteredChars(characters);
  }, [characters])


  return (
    <div className='container-characters'>
      <div className='searcher'>
        <div className='searcher_input'>
          <img className='input-lupa' src={lupa} alt='lupa' />
          <input onChange={(e) => onFilter(e)} className='searcher_input-inp' type='text' placeholder='Search...' />
        </div>
        <div className='searcher_icon'>
          <Link to='/'>
            <img src={homeIcon} alt='home_icon-img'></img>
          </Link>
        </div>
      </div>
      <div className='gallery-container'>
        <Gallery props={filteredChars}></Gallery>
        <Menu></Menu>
      </div>
    </div>
  )
}

export default Characters;
