import React from 'react'
import Menu from '../../components/Menu/Menu'
import logo from '../../assets/logo.png'

import './home.css'
const Home = () => {
  return (
    <div className='home'>
    <div className='logo'>
      <img src={logo} alt='logo'/>
    </div>
      <footer>
        <Menu />
      </footer>

    </div>
  )
}

export default Home
