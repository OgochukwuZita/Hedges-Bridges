import React, {useState} from 'react'
import '../Styles/Accordion.css' 
import { FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion';
import BreakIcon from './BreakIcon';
const Accordion = ({data, titleKey, contentKey}) => {
      
   const [activeIndex, setActiveIndex] = useState(null);    
   
   const Toggle = (index)=>{
    setActiveIndex(activeIndex === index ? null : index)
   };

  return (
    <div className='wrapper'>
      <div className='Accordion'>
        {
          data.map((item,index)=>(
            <div key={item.id} className='accordion-item'>
              <button className='accordionTitle'onClick={()=>Toggle(index)}>
                <span className='accordionTitle-text'>{item[titleKey]}</span>
                <span className='toggleIcon' ><FaPlus /></span>
              </button>
              {activeIndex === index && (<motion.div className='accordionContent' initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <p>{item[contentKey]}</p></motion.div>
            )}
            </div>
          ))}
      </div>
      <BreakIcon/>
    </div>
  )
}

export default Accordion