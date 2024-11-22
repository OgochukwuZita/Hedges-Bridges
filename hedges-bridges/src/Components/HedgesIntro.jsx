import React from 'react'
import '../Styles/pages.css'
import '../Styles/home.css'
import { NavLink } from 'react-router-dom'

const HedgesIntro = () => {
  return (
    <div className='Intro'>
      <div className='aboutLeft'>
        <h2>About us....</h2>
        <p>At Hedges & Bridges Solicitors and Advocates, we are committed to delivering exceptional legal services tailored to meet the dynamic needs of our clients. </p>
        <p>Based in Lagos, Nigeria, our firm is built on a foundation of trust, integrity, and professionalism, offering innovative legal solutions across diverse practice areas.</p>
      </div>
      <div className='MoreBtn'>
        <NavLink to="/About.jsx" onTouchStart={(e) => e.target.classList.add('touched')} onTouchEnd={(e) => e.target.classList.add('touched')}>More</NavLink>
      </div>

    </div>
  )
}

export default HedgesIntro