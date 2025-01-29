import React from 'react'
import HeadSection from '../Components/HeadSection'
import ArchiveCards from '../Components/ArchiveCards'

const Archive = () => {
  return (
    <div className='content'>
    <HeadSection title={'Explore Archive'} description={"Find your ideal read"}/>
    <div className='innerContainer'>
      <ArchiveCards/>
    </div>
      
    </div>
  )
}

export default Archive
