import React, { useState, useRef } from 'react';
import '../Styles/Contact.css';

const Review = () => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [formState, setFormState] = useState({ succeeded: false, error: '' });
  const formRef = useRef(null);

  const maxChar = 220;
  const BaseUrl = 'https://hedgesbridgesserver.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BaseUrl}/api/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.Name.value,
          rating: Number(rating),
          message: review,
        }),
      });

      if (response.ok) {
        setFormState({ succeeded: true, error: '' });
        formRef.current?.reset();
        setRating('');
        setReview('');
      } else {
        const data = await response.json();
        setFormState({
          succeeded: false,
          error: data.message || 'Something went wrong.',
        });
      }
    } catch (error) {
      setFormState({
        succeeded: false,
        error: 'Network error. Try again later.',
      });
      console.error(error);
    }
  };

  return (
    <div className="reviewForm">
      {formState.succeeded && <p className="successMsg">Thanks for your review.</p>}
      {formState.error && <p className="errorMsg">{formState.error}</p>}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" id="Name" placeholder="Enter Your Name" required />
        </div>

        <div className="formField">
          <label htmlFor="rating">Rate Our Services:</label>
          <select
            value={rating}
            id="rating"
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a rating:
            </option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>

        <div className="formField">
          <label htmlFor="review">Write your review:</label>
          <textarea
            name="review"
            id="review"
            placeholder="Share your thoughts"
            onChange={(e) => setReview(e.target.value)}
            value={review}
            maxLength={maxChar}
            required
          ></textarea>
          <p className="charCount">{review.length}/{maxChar}</p>
        </div>

        <div className="btnContainer">
          <button type="submit" disabled={review.length > maxChar}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Review;
