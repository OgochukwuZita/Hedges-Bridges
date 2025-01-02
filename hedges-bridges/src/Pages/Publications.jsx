import React from 'react'
import HeadSection from '../Components/HeadSection'
import '../Styles/HeadSection.css'
import PubCards from '../Components/PubCards'

const Publications = () => {
  return (
    <div className='content'>
      <HeadSection title={'Discover Insights'} description={'Stay informed with expert insights and fresh perspectives on corporate law.'}/>
      <div className='innerContainer'>
        <PubCards/>
      </div>
      </div>
  )
}

export default Publications