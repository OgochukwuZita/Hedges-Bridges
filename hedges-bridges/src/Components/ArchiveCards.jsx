import React, {useState} from 'react'
import { SlCalender } from "react-icons/sl";
import '../Styles/Archive.css';
import '../Styles/publications.css';
import publications from '../Components/data'
import defaultImage from '../assets/slide1.jpg'


const ArchiveCards = () => {

  const [selectedPublication, setSelectedPublication]= useState(null);
  return (
    <div className='archiveCards'>
      {selectedPublication ? (
              <div className='mainPublication'>
          <ul className='detail mainDetails'>
            <li className='date'>
              <span className='dateIcon'><SlCalender/></span>
              <span><strong>{selectedPublication.date}</strong></span>
            </li>
            <li>Written By: <strong>{selectedPublication.author}</strong></li>
          </ul>
          <article>
            <img src={selectedPublication.img || defaultImage} alt={selectedPublication.title || 'Publication Image'} className='pubImage'/>
            <h1>{selectedPublication.title}</h1>
            <h2>{selectedPublication.subTitle}</h2>
            <p>{selectedPublication.article}</p>
          </article>
          <button
            className='BackBtn'
           onClick={()=>selectedPublication(null)}
          >
            Back
          </button>
        </div>
      ) : ( 
      <div className='subCardContainer'>
        {publications.map((publication, index)=>(
        <div className='subCard' key={index}>
        <h2 className='Title'>{publication.title}</h2>  
          <ul className='archDate'>
            <li className='date'>
                <span className='dateIcon'><SlCalender/></span>
                <span><strong>{publication.date}</strong></span>
                </li>
          </ul>
          <div className='pubContent'>
          <p>{publication.introduction || 'Introduction not available'}</p>
          </div>
          <button className='MoreBtn' onClick={()=>setSelectedPublication(publication)}> Read</button>
        </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default ArchiveCards
