import React, {useState} from 'react'
import PropertyForm from '../Components/PropertyForm'
import PublicationsForm from '../Components/PublicationsForm'
import LoginModal from '../Components/LoginModal'
import '../Styles/Admin.css'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
<div className='innerContainer admin-container'>
      {!isLoggedIn ? (
        <LoginModal setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <h3 className='admin-containerHeading Welcome-msg'>
            Hi Afam, Welcome To Your Admin Dashboard
          </h3>
          <div className='content'>
            <PublicationsForm />
            <PropertyForm />
          </div>
        </>
      )}
    </div>  )
}

export default Login