import React from 'react'
import PropertyForm from '../Components/PropertyForm'
import PublicationsForm from '../Components/PublicationsForm'
// import LoginModal from '../Components/LoginModal'
import '../Styles/Admin.css'

const Login = () => {
  return (
    <div className='innerContainer admin-container'>
        <h3 className='admin-containerHeading Welcome-msg'>Hi Afam, Welcome To Your Admin Dashboard</h3>
        <div className='content'>
        <PublicationsForm/>
        <PropertyForm/>
        {/* <LoginModal/> */}
        </div>
    </div>
  )
}

export default Login