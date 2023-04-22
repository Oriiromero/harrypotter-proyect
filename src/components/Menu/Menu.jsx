import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    // <div className='nv'>
      <nav className='nav'>
        <Link className="nav__link" to="/characters">Characters</Link>
        <Link className="nav__link" to="/houses">Houses</Link>
        <Link className="nav__link" to="/cronology">Cronology</Link>
      </nav>
    // </div>
  )
}

export default Menu;
