import React from 'react'
import '../Styles/publications.css'
import BreakIcon from '../Components/BreakIcon'
// import {publications} from '../Components/data'
const PubCards = () => {
  return (
    <div className='pubContainer'>
      <div className='pubCard'>
      <div className='introCard'>
        <h2 className='Title'>This is the publication Title</h2>
        <ul className='details'>
          <li>author</li>
          <li>date</li>
        </ul>
        <BreakIcon/>
        <p>This is the intoductory paragraph</p>
        <button className='MoreBtn'>Read More</button>
      </div>
      </div>
      
    </div>
  )
}

export default PubCards
