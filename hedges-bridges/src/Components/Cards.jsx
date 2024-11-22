import React from 'react'
import '../Styles/pages.css'
import '../Styles/home.css'
import { GiJusticeStar } from "react-icons/gi";
import {useNavigate} from 'react-router-dom'

const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className='Cards'>
      <div className='card'>
        <div className='cardContent'>
            <h2>10+ Years of Experience</h2>
            <div className="justiceStar">
            <GiJusticeStar />
            </div>
            <p>Over a decade of proven legal expertise, delivering exceptional results you can count on</p>
        </div>
      </div>
      <div className='card'>
        <div className='cardContent'>
            <h2>200+ Satisfied Clients</h2>
            <div className="justiceStar">
            <GiJusticeStar />
            </div>
            <p>Hundreds of clients trust us to deliver outstanding legal solutions—join the growing list</p>
            <button className='cardButton' onClick={()=> navigate('/Contact')}>Contact Us</button>
        </div>
      </div>
      <div className='card'>
        <div className='cardContent'>
            <h2>24/7 Client Assistance</h2>
            <div className='justiceStar'>
            <GiJusticeStar />
            </div>
            <p>You can count on legal support that never sleeps—always here to provide expert guidance when you need it</p>
        </div>
      </div>
    </div>
  )
}

export default Cards