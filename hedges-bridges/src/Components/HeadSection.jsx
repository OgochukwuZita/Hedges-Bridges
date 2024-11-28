import React from 'react'
import '../Styles/HeadSection.css';

const HeadSection = ({description,title}) => {
  return (
    <div className='HeadSection'>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
  )
}

export default HeadSection