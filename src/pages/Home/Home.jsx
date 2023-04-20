import React from 'react'
import Menu from '../../components/Menu/Menu'
import logoHP from '../../assets/logo-harrypotter.png'

const Home = () => {
  return (
    <div className='home'>
    <div className='logo'>
      <img src={logoHP} alt='logo'></img>
    </div>
      <footer>
        <Menu />
      </footer>

    </div>
  )
}

export default Home
