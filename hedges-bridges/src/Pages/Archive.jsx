import React from 'react'
import HeadSection from '../Components/HeadSection'
import { SlCalender } from "react-icons/sl";


const Archive = () => {
  return (
    <div className='content'>
    <HeadSection title={'Explore Archive'} description={"Find your ideal read"}/>
    <div className='innerContainer'>
      <div className='archiveTab'>
        <p className='topic'>This is the articl topic</p>
        <p className='date'></p>

      </div>
      <div className='mainPublicaion'>
          <ul className='detail mainDetails'>
            <li className='date'>
              <span className='dateIcon'><SlCalender/></span>
              <span><strong></strong></span>
            </li>
            <li>Written By: <strong></strong></li>
          </ul>
          <article>
            <img src className='pubImage'/>
            <h1></h1>
            <h2></h2>
            <p></p>
          </article>
          <button
            className='BackBtn'
           
          >
            Back
          </button>
        </div>

    </div>
      
    </div>
  )
}

export default Archive
