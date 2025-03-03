import React from 'react'
import ManageAll from '../Components/manageAll'

const Posts = () => {
  return (
    <div className='content'>
    <h2 className='admin-containerHeading'>Manage all posted properties and publications here</h2>
    <h2 className='alt-ContainerHeading'>Manage Dashboard</h2>
      <div className='innerContainer'>
        <ManageAll/>
      </div>
    </div>
  )
}

export default Posts
