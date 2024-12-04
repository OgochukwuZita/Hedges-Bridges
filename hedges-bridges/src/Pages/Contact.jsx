import React from 'react'
import HeadSection from '../Components/HeadSection'
import Office from '../Components/Office'
import '../Styles/HeadSection.css'
import '../Styles/Contact.css'
import GoogleMap from '../Components/GoogleMap'
const Contact = () => {
  return (
    <div className='content'>
    <HeadSection title ={'Get in Touch'} description={"Let’s start a conversation. We're always listening."}/>
    <div className='officeContent'>
    <Office/>
    <GoogleMap/>

    </div>
    <div className='innerContainer'>

    </div>
    </div>
  )
}

export default Contact
