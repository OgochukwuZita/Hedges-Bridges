import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import '../Styles/About.css'
import { NavLink } from 'react-router-dom';
const Pointers = ({title, to}) => {
  return (
    <div className='exploreCards'>
        <NavLink to={to}>
        <p>{title} <span className='arrowRight'><FaArrowRight /></span></p>
        </NavLink>
    </div>
  )
}

export default Pointers