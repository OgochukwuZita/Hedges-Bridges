import React, {useState} from 'react'
import '../Styles/Search.css'
import { div } from 'framer-motion/client'

const Find = () => {
  return (
    <div>
    <div className='searchContainer'>
    <div className='searchBar'>
      <input type ='text' placeholder='Search for something...' className='searchBar'/>
    </div>
    </div>
    </div>
  )
}

export default Find
