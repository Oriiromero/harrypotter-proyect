import React, { useContext, useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import { CharactersContext } from '../../shared/characters.context';
import CronologyItem from '../../components/CronologyItem/CronologyItem';
import './Cronology.css'
import arrow from '../../assets/arrow.png'
import homeIcon from '../../assets/home-icon.png'
import { Link } from 'react-router-dom';

const Cronology = () => {
  const  { characters } = useContext(CharactersContext);
  const [sortedChars, setSortedChars] = useState([]);
  
  const [text, setText] = useState('Z');
  const [sortOrder, setSortOrder] = useState('asc'); // add state for sort order
  
  const onSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; // toggle sort order
    setSortOrder(newSortOrder);
    const sortedChar = [...characters].sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }
      if (sortOrder === 'asc') {
        return a.name < b.name ? -1 : 1;
      } else {
        return a.name > b.name ? -1 : 1;
      }
    });

    setSortedChars(sortedChar);
    
    setText(newSortOrder === 'asc' ? 'Z' : 'A');
    const arrow = document.querySelector('.arrow');
    arrow.classList.toggle('reverse'); // toggle arrow class
  }

  useEffect(()=> {
    setSortedChars(characters);
  }, [characters])

  return (
  <>
    <div className='body'>
    <div className='navigation'>
      <div className='home-back'>
      <Link to='/'>
          <img className='icon-home' src={homeIcon} alt='home_icon-img'></img>
      </Link>
      </div>
    </div>
     <div className='crono-container'>
      <div onClick={onSort} className='circle-letter'>
          <p>{text}</p>
        </div>
        <div className='arrow'>
          <img src={arrow} alt='arrow' />
        </div>
        <div className='timeline-container'>
          {sortedChars.map((character, index)=> (
            <CronologyItem chars={character} key={index} />
          ))}
        </div>
     </div>
      <Menu></Menu>
    </div>
  </>
  )
}

export default Cronology;
