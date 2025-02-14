import React from 'react'
import HeadSection from '../Components/HeadSection'
import Comment from '../Components/Comment';
const Testimonials = () => {
  return (
    <div className='content'>
      <HeadSection title={'What Our Clients Have To Say'}/>
      <div className='innerContainer'>
        <Comment/>
      </div>
    </div>
  )
}

export default Testimonials