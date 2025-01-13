import React from 'react'
import HeadSection from '../Components/HeadSection'
import '../Styles/HeadSection.css'
import PropCards from '../Components/PropCards'


const Properties = () => {
  return (
    <div className='content'>
    <HeadSection title={'Explore Properties'} description={"Find your ideal property with our curated listings of real estate for sale."}/>
    <div className='innerContainer'>
    </div>
      <PropCards/>
    </div>
  )
}

export default Properties