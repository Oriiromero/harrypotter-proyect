import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
      <nav className='nav'>
        <Link className="nav__link" to="/characters">Characters</Link>
        <Link className="nav__link" to="/organizations">Organizations</Link>
        <Link className="nav__link" to="/timeline">Timeline</Link>
      </nav>
  )
}

export default Menu;
