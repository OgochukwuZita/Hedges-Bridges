import React from 'react'
import '../Styles/About.css'
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

const Pointers = ({title, to}) => {
  return (
    <motion.div initial={{color:'#fece', backgroundColor:'#0d151c'}} whileHover={{scale:0.95, backgroundColor:'#a48d07', color:'#0d151c'}} transition={{duration:0.6}} whileTap={{scale:0.95, backgroundColor:'#a48d07', color:'#0d151c'}}  className='exploreCards'>
        <NavLink to={to}>
        <p>{title}
          </p>
        </NavLink>
    </motion.div>
  )
}

export default Pointers