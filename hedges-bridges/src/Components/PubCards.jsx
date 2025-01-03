import React, {useState} from 'react'
import '../Styles/publications.css'
import BreakIcon from '../Components/BreakIcon'
import { SlCalender } from "react-icons/sl";
// import {publications} from '../Components/data'
import Pointers from '../Components/Pointers'
const PubCards = () => {
  // const [selectedPublication, setSelectedPublication] = useState(null);
  
  // const sortedPublications = [...publications].sort((a,b) => new Date (b.date)- new Date (a.date));

  // const recentPublications = sortedPublications.slice(0,10)
  return (

    <div className='pubContainer'>

      <div className='pubCard'>
        
      <div className='introCard'>
        <h2 className='Title'>This is the publication Title</h2>
        <ul className='details'>
          <li className='date'> <span className='dateIcon'><SlCalender/></span> <span>8/12/23</span></li>
          <li>Jane Doe</li>
        </ul>
        <BreakIcon/>
        <div className='pubContent'>
        <p>This is the intoductory paragraph</p>
        </div>
        <button className='MoreBtn'>Read More</button>
      </div>
      </div>
      <div className='pointerContainer'>
      <Pointers title={'View Archive'} to={'/Archive'}/>
      </div>

    </div>
  )
}

export default PubCards
