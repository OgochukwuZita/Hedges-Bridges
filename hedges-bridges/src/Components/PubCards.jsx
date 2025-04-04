import React, { useState } from 'react';
import '../Styles/publications.css';
import BreakIcon from '../Components/BreakIcon';
import { SlCalender } from "react-icons/sl";
import  publications from '../Components/data'
import Pointers from '../Components/Pointers';
import defaultImage from '../assets/publications.jpg';

const PubCards = () => {

  const [selectedPublication, setSelectedPublication] = useState(null);

  const sortedPublications = [...publications].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const recentPublications = sortedPublications.slice(0, 10);

  return (
    <div className='pubContainer'>
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
            <img src={selectedPublication.img || defaultImage }  alt={selectedPublication.imageTitle || 'publication image'} className='pubImage'/>
            <h1>{selectedPublication.title}</h1>
            <h2>{selectedPublication.subTitle}</h2>
            <p>{selectedPublication.article}</p>
          </article>
          <button
            className='BackBtn'
            onClick={() => setSelectedPublication(null)}
          >
            Back
          </button>
        </div>
      ) : (
        <div className='pubCard'>
          {recentPublications.map((publication, index) => (
            <div className='Card' key={index}>
              <h2 className='Title'>{publication.title}</h2>
              <ul className='detail'>
                <li className='date'>
                  <span className='dateIcon'><SlCalender/></span>
                  <span><strong>{publication.date}</strong></span>
                </li>
                <li>Written By: <strong>{publication.author}</strong></li>
              </ul>
              <BreakIcon />
              <div className='pubContent'>
                <p>{publication.introduction|| 'Introduction not available'}</p>
              </div>
              <button
                className='MoreBtn'
                onClick={() => setSelectedPublication(publication)}
              >
                Read More
              </button>
              </div>
            
          ))}
          </div>
      )}
      <div className='pointerContainer'>
        <Pointers title={'View Archive'} to={'/Archive'} />
      </div>
    </div>
  );
};

export default PubCards;
