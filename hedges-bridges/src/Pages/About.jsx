import React from 'react'
import HeadSection from '../Components/HeadSection'
import '../Styles/About.css'

const About = () => {
  return (
    <div>
      <div>
        <div className='mainTitle'>
        <HeadSection description={'About Hedges And Bridges Solicitors and Advocates'}/>

        </div>
    <div className='altTitle'>
    <HeadSection description={'About Us'} />
    </div>
    </div>
    </div>
  )
}

export default About