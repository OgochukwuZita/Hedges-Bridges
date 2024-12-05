import React from 'react'
import {useForm, ValidationError} from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm('xjkvzykj')
  return (

    <div className='contactForm'>
        {state.succeeded && <p className='successMsg'>Thanks for Your Message, we will respond shortly.</p>}
        <form onSubmit={handleSubmit}>
            <div className='formField'>
            <label htmlFor="Name"> Name: </label>
            <input type="text" name="Name" id="Name" placeholder='Enter Your Name' required/>
            <ValidationError prefix='Name' field='Name' errors={state.errors}/>
            </div>
            <div className='formField'>
            <label htmlFor="Phone NUMBER"> Phone Number: </label>
            <input type= 'text' name="Number" id="Number" placeholder='Enter Your Phone Number' required/>
            <ValidationError prefix='Number' field='Number' errors={state.errors}/>
            </div>

            <div className='formField'>
            <label htmlFor='Email'>Email Address:</label>
            <input id='Email' type ='Email' name='Email' placeholder='Enter Email Address' required/>
            <ValidationError prefix='Email' field='Email' errors={state.errors}/>
            </div>

            <div className='formField'>
            <label htmlFor='Message'>Message:</label>
            <textarea name="Message" id="Message" required></textarea>
            <ValidationError prefix='Message' field='Message' errors={state.errors}/>
            </div>

            <div className='btnContainer'>
            <button type='submit' disabled ={state.submitting}>Submit</button>
            </div>

        </form>

    </div>
  )
}

export default ContactForm