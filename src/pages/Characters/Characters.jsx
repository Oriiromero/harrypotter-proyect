import React, { useContext } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import { CharactersContext } from '../../shared/characters.context';
import Menu from '../../components/Menu/Menu';

const Characters = () => {
  const  { characters } = useContext(CharactersContext);

  return (
    <div>
      <input type='text' placeholder='search'></input>
      <Gallery props={characters}></Gallery>
      <Menu></Menu>
    </div>
  )
}

export default Characters;
