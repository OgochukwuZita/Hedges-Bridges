import React from 'react'
import '../Styles/HeadSection.css';

const HeadSection = ({description}) => {
  return (
    <div className='HeadSection'>
        <h1>{description}</h1>
        </div>
  )
}

export default HeadSection