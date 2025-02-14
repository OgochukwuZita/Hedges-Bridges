import React, {useState} from 'react'
import {useRef} from 'react'
import '../Styles/Contact.css'

const Review = () => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [formState, setFormState] = useState({succeded:false})
  const formRef = useRef(null);

  const maxChar = 150;

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log('Rating:', rating)
    console.log('Review:', review)

    setFormState({succeeded: true})
    
    if(formRef.current){
      formRef.current.reset();
      setRating('');
      setReview('');
  }

  }

  return (
    <div className="reviewForm">
      {formState.succeeded && <p className="successMsg">Thanks for your review.</p>}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='formField'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" id="Name" placeholder='Enter Your Name' required/>
        </div>
        <div className="formField">
        <label htmlFor='rating'>Rate Our Services:</label>
        <select value={rating} id="rating" onChange={(e)=>setRating(e.target.value)} required>
          <option value="" disabled > Select a rating:</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        </div>

        <div className='formField'>
        <label htmlFor='review'>Write your review:</label>
        <textarea name="review" id="review" placeholder='Share your thoughts' onChange={(e)=>setReview(e.target.value)} maxLength={maxChar} required></textarea>
        <p className='charCount'>{review.length}/{maxChar}</p>
        </div>
        <div className="btnContainer">
        <button type='submit' disabled={review.length>maxChar}>Send</button>
        </div>

      </form>
    </div>
  )
}

export default Review