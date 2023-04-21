import React, { useContext } from 'react'
import { CharactersContext } from '../../shared/characters.context';

const Gallery = (charact) => {
  const props = charact.props

  return (
    <div>
    {props.map((e, index) =><> <div key={index}>
      <img src={e.image} alt={e.actor}></img>
    </div>
    <p>{e.name}</p>
    </>
    )}
    </div>
  )
}

export default Gallery
