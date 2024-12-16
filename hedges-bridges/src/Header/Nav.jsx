import React from 'react'
import '../Styles/navStyles.css'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='navbar'>
      <div className='navbar-logo'><p>HBSA</p></div>
      <div className='Menu' onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
        <hr className='divider' />
        <li><NavLink to='/Home' onClick={toggleMenu}>Home</NavLink></li>
        <hr className='divider' />
        <li><NavLink to='/About' onClick={toggleMenu}>About</NavLink></li>
        <hr className='divider' />
        <li><NavLink to='/Service' onClick={toggleMenu}>Our Service</NavLink></li>
        <hr className='divider' />
        <li><NavLink to='/Contact' onClick={toggleMenu}>Contact</NavLink> </li>
        <hr className='divider' />
        <li><NavLink to='/Properties' onClick={toggleMenu}>Properties</NavLink></li>
        <hr className='divider' />
        <li><NavLink to = '/Publications' onClick={toggleMenu}>Publications</NavLink></li>
        <hr className='divider' />
        <div className='navlink-search'>
          <li ><NavLink to='/Search'><FaSearch /></NavLink> </li>
        </div>
        <li className='search-sm' ><NavLink to='/Search' onClick={toggleMenu}>Search</NavLink> </li>
      </ul>
    </nav>
  )
}

export default Nav
