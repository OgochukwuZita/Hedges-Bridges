import React from 'react'
import { SlCalender } from "react-icons/sl";
import '../Styles/Archive.css';
import '../Styles/publications.css';


const ArchiveCards = () => {
  return (
    <div className='archiveCards'>
      <div className='subCardContainer'>
        <div className='subCard'>
        <h2>This is the topic</h2>  
          <ul className='details'>
            <li className='date'>
                <span className='dateIcon'><SlCalender/></span>
                <span><strong>Date</strong></span>
                
                </li>
            <li>Written By: <strong></strong></li>
          </ul>
          <p>Introduction</p>
          <button>Read</button>

        </div>
      </div>

        <div className='mainPublication'>
          <ul className='detail mainDetails'>
            <li className='date'>
              <span className='dateIcon'><SlCalender/></span>
              <span><strong></strong></span>
            </li>
            <li>Written By: <strong></strong></li>
          </ul>
          <article>
            <img src='' alt='' className='pubImage'/>
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
  )
}

export default ArchiveCards
