import React from 'react'
import HeadSection from '../Components/HeadSection'
import Accordion from '../Components/Accordion'
import Band from '../Components/Band'
import {stillWatersFAQs} from '../Components/data'
import Pointers from '../Components/Pointers'
const Faq = () => {
  return (
    <div className='content'>
      <HeadSection title={'Explore Frequently Asked Questions'}/>
      <div className='innerContainer'>
      <Band/>
      <Accordion data={stillWatersFAQs} titleKey='question' contentKey='answer'/>
      <div className='pointers'>
      <Pointers title ={'Explore Our Services'} to={'/Service'}/>
      <Pointers title={'Explore Client Reviews'} to={'/Review'}/>
      </div>

      </div>
    </div>
  )
}

export default Faq