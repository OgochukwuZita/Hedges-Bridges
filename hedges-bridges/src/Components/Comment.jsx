import React from 'react';
import '../Styles/Testimonial.css';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Comment = () => {
  return (
    <div className='CommentContainer'>
      <div className='commentCard'>
        <FaQuoteLeft className='Lquote'/>
        <span className='rating'>⭐⭐⭐⭐</span>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p</p>
        <span className='name'>- Glory Obong</span>
        <FaQuoteRight className='Rquote'/>
      </div>
    </div>
  )
}

export default Comment
