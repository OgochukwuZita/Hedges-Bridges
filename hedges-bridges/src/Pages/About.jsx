import React from 'react'
import HeadSection from '../Components/HeadSection'
import '../Styles/About.css'

const About = () => {
  return (
    <div>
      <div>
        <div className='mainTitle'>
        <HeadSection title={'About Hedges And Bridges Solicitors And Advocates'} description={'Driven by excellence, built on trust. Discover the principles behind our success.'}/>

        </div>
    <div className='altTitle'>
    <HeadSection title={'About Us'} description={'Discover the principles behind our success.'}/>
    </div>
    </div>
    </div>
  )
}

export default About