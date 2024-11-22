import React from 'react'
import Carousel from '../Components/Carousel'
import Band from '../Components/Band'
import Cards from '../Components/Cards'
import HedgesIntro from '../Components/HedgesIntro'
import '../Styles/pages.css'
import '../Styles/home.css'

const Home = () => {
  return (
    <div className='content'>
      <Carousel />
      <Band />
      <div className='innerContainer'>
        <HedgesIntro />
        <Cards />
      </div>
    </div>
  )
}

export default Home
