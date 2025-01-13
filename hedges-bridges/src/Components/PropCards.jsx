import React from 'react'
import '../Styles/properties.css'

const PropCards = () => {
  return (
    <div className='propContainer'>

      <div className='Card propCard'>
      <div className='propImage'>
        <img src="" alt="property image" />
        </div>
          <p>Description of Property </p>
          <p>price</p>
          <button className='offerBtn'>Make an Offer</button>
      </div>
      <div className='Card'>
        <div>
        <img src="" alt="property image" />
        </div>
          <p>Description of Property </p>
          <p>price</p>
          <button className='offerBtn'>Make an Offer</button>
      </div>
      <div className='Card'>
      <div>
        <img src="" alt="property image" />
        </div>
          <p>Description of Property </p>
          <p>price</p>
          <button className='offerBtn'>Make an Offer</button>
      </div>
      <div className='Card'>
      <div>
        <img src="" alt="property image" />
        </div>
          <p>Description of Property </p>
          <p>price</p>
          <button className='offerBtn'>Make an offer</button>
      </div>
    </div>
  )
}

export default PropCards
