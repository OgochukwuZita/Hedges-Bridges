import React from 'react'

const GoogleMap = () => {
  return (
    <div className='Map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4714.067942583257!2d3.3601285686308326!3d6.5162627382223315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c48d6666b7f%3A0x3e53bdc63d667a3b!2s16%20Akinhanmi%20St%2C%20Surulere%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1733279045251!5m2!1sen!2sng" width="100%" height="450" style={{border:1}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap