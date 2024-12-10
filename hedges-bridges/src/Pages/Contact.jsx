import React from 'react'
import HeadSection from '../Components/HeadSection'
import Office from '../Components/Office'
import '../Styles/HeadSection.css'
import '../Styles/Contact.css'
import GoogleMap from '../Components/GoogleMap'
import ContactForm from '../Components/ContactForm'
import Review from '../Components/Review'

const Contact = () => {
  return (
    <div className='content'>
    <HeadSection title ={'Get in Touch'} description={"Let’s start a conversation. We're always listening."}/>
    <div className='officeContent'>
    <Office/>
    <GoogleMap/>
    </div>
    <div className='innerContainer'>
      <div className='form'>
      <h2><span className='underlined'>Start a Conversation...</span></h2>
      <ContactForm/>
      </div>
      <div className='revForm'>
        <h2><span className='underlined'>Leave a Review</span></h2>
        <Review/>
      </div>
    </div>
    </div>
  )
}

export default Contact
