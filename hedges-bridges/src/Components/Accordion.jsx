import React, {useState} from 'react'
import '../Styles/Accordion.css' 
import { FaPlus } from "react-icons/fa";

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
              {activeIndex === index && (<div className='accordionContent'>
                <motion.p>{item[contentKey]}</motion.p></div>
            )}
            </div>
          ))}
      </div>
      
    </div>
  )
}

export default Accordion