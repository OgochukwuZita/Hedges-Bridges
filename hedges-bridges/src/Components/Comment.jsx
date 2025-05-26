import React, {useState, useEffect} from 'react';
import '../Styles/Testimonial.css';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Comment = () => {
  const [reviews, setReviews]=useState([]);
    const BaseUrl = 'https://hedgesbridgesserver.onrender.com';

    useEffect(()=>{
      const fetchReviews = async ()=>{
        try{
          const response = await fetch(`${BaseUrl}/api/review`);
          const data = await response.json();
          setReviews(data);
        } catch (error) {
          console.error('Error fetching reviews:', error)
        }
      }
      fetchReviews();
    }, [])
  
  return (
    <div className='CommentContainer'>
      {reviews.length === 0?(
        <p>Loading Testimonials ...</p>
      ):(
        reviews.map((review)=>(
      <div className='commentCard' key={review._id}>
        <FaQuoteLeft className='Lquote'/>
        <span className='rating'>{'⭐'.repeat(review.rating)}</span>
        <p>{review.message}</p>
        <span className='name'>- {review.name}</span>
        <FaQuoteRight className='Rquote'/>
      </div>
      ))
    )}
    </div>
  )
}

export default Comment
