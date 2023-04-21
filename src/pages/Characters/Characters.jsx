import React, { useContext } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import { CharactersContext } from '../../shared/characters.context';
import homeIcon from '../../assets/home-icon.png'
import lupa from '../../assets/lupa.png'
import './characters.css';

const Characters = () => {
  const  { characters } = useContext(CharactersContext);

  return (
    <div className='container-characters'>
      <div className='searcher'>
        <div className='searcher_input'>
          <input className='searcher_input-inp' type='text' placeholder='Search...' />
          <img className='input-lupa' src={lupa} alt='lupa' />
        </div>
        <div className='searcher_icon'>
          <img src={homeIcon} alt='home_icon-img'></img>
        </div>
      </div>
      <div className='gallery-container'>
        <Gallery props={characters}></Gallery>
      </div>
    </div>
  )
}

export default Characters;
