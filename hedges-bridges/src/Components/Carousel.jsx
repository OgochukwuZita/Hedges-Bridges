import React from 'react';
import '../Styles/home.css';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg'

const Slides = [
  {
    id: 1,
    contentHead: 'Expert legal services at your finger tips',
    content: 'A team of experienced legal professionals, dedicated to providing personalized guidance and support for all your legal needs.Trust in expertise that’s accessible, efficient, and always within reach.',
    imageUrl: slide1,
    buttonText: 'Learn more',
    buttonLink: '../Pages/About.jsx'
  },

  {
    id: 2,
    contentHead: 'Reliable and Professional Legal Support',
    content: "We provide dependable legal support wherever you need it. From contract negotiations to compliance, our expertise safeguards your company's interests with tailored, effective legal solutions for the unique challenges of the corporate world.",
    imageUrl: slide2,
    buttonText: 'Find a lawyer',
    buttonLink: '../Pages/Contact.jsx'
  },

  {
    id: 3,
    contentHead: 'Your Legal Ally Every Step of the Way',
    content: 'We equip you with the knowledge and support needed to make informed legal decisions for your business.Our mission is to navigate complexities, ensuring you feel empowered and secure at every step.',
    imageUrl: slide3,
    buttonText: 'Explore FAQs',
    buttonLink: '../Pages/Faq.jsx'
  }
]

function Carousel() {
  const [currentSlide, setCurrenSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrenSlide((prevSlide) => (prevSlide + 1) % Slides.length);
  }

  const goToPrevSlide = () => {
    setCurrenSlide((prevSlide) => (prevSlide - 1 + Slides.length) % Slides.length)
  }

  const handlers = useSwipeable({
    onSwipedRight: () => goToNextSlide(),
    onSwipedLeft: () => goToPrevSlide(),
  })

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 10000);
    return () => clearInterval(interval)
  }, [])

  const navigate = useNavigate();

  return (
    <div className='hCarousel' {...handlers}>
      <div className='slides' style={{
        backgroundImage: `url(${Slides[currentSlide].imageUrl})`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <MdNavigateBefore className='navIcon leftIcon' onClick={goToPrevSlide} />
        {/* Render the current slide */}
        <div className='slide' >
          <div className="details">
            <h2>{Slides[currentSlide].contentHead}</h2>
            <p>{Slides[currentSlide].content}</p>
          </div>

          <button className='slideButton' onClick={() => navigate(Slides[currentSlide].buttonLink)} onTouchStart={(e) => e.target.classList.add('touched')} onTouchEnd={(e) => e.target.classList.remove('touched')}> {Slides[currentSlide].buttonText}</button>

          {/*pagination section */}
          <div className='pagination'>
            {Slides.map((_, index) => (
              <div key={index} className={`dot ${index === currentSlide ? "active" : ''}`} ></div>
            ))}
          </div>
        </div>
        <MdNavigateNext className='navIcon rightIcon' onClick={goToNextSlide} />
      </div>
    </div>

  )
}

export default Carousel
