import React from 'react'
import HeadSection from '../Components/HeadSection'
import QuestionArray from '../Components/Accordion'
import Band from '../Components/Band'
import Accordion from '../Components/Accordion'
import '../Styles/HeadSection.css'
import {services} from '../Components/data'
import '../Components/data'
import Pointers from '../Components/Pointers'
const Service = () => {
  return (
    <div className='content'>
    <div >
    <HeadSection title={'What We Offer?'} description={'Solutions tailored to your needs. Explore our range of services here.'}/>
    </div>
    <div className='innerContainer'>
      <Band/>
      <Accordion data={services} titleKey='title' contentKey='description'/>
      <div className='pointers'>
      <Pointers title ={'Explore FAQs'} to={'/Faq'}/>
      <Pointers title={'Start a Conversation'} to={'/Contact'}/>
      </div>
    </div>
    </div>
  )
}

export default Service
