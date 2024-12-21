import '../Styles/footer.css';
import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si"
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiInstagram } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='linksContainer'>
        <div className='quickLinks'>
          <p className='quickLinksTitle'>Quick Links</p>
          <ul>
            <li><Link to='/FAQ'>FAQ |</Link></li>
            <li><Link to='/Testimonials'>Testimonials |</Link></li>
            <li> <Link to='/About'>Company  |</Link></li>
            <li><Link to='/Login'>Login</Link></li>
          </ul>
        </div>
        <div>
          <p className='follow'>Follow Us</p>
          <div className='Socials'>
            <ul>
              <li><a href=""><SiLinkedin /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100079119491699"><FaFacebookSquare /></a></li>
              <li><a href="https://x.com/home"><BsTwitterX /></a></li>
              <li><a href="https://www.instagram.com/hedges.bridges/"><FiInstagram /></a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className='rightsReserved'>
        <p >&copy; 2024 Hedges & Bridges. All rights reserved.</p>
      </div>

      <div className='contactUs'>
        <p className='contactUsTitle'>Contact Us</p>
        <p>Phone: 08101957958</p>
        <p>Email: hedges.bridges@gmail.com</p>
        <p>Open: Mon-Fri, 8am - 5pm</p>
        <p>Address: 16, Akinhanmi Street,Surulere, Lagos</p>
      </div>
      <div className='contactUs2'>
        <p className='contactUsTitle'> Contact Us</p>
        <p><span>Phone: </span> <span> 08101957958</span></p>
        <p><span>Email: </span> <span> hedges.bridges@gmail.com</span></p>
        <p><span>Open: </span> <span> Mon-Fri, 8am - 5pm</span></p>
        <p><span><MdOutlineLocationOn className='address' /></span> 16, Akinhanmi Street,Surulere, Lagos</p>

      </div>

      <hr />
      <div className='rightsReserved2'>
        <p >&copy; 2024 Hedges & Bridges. All rights reserved.</p>
      </div>



    </div>

  )
}

export default Footer