import React from 'react'
import {useState} from "react"
import publications from '../Components/data'
import { properties } from '../Components/data'
import '../Styles/ManageAll.css'
import '../Styles/Properties.css'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ManageAll = () => {
  const [Publications, setPublications] = useState(publications);
  const [Properties, setProperties] = useState(properties);

  const handleDeletePublication = (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      setPublications(publications.filter((pub) => pub.id !== id));
    }
  };
   const handleDeleteProperty = (id)=>{
    if(window.confirm('Are yu sure you want to delete this property?')){
      setProperties(properties.filter((prop)=> prop.id !== id));
    }
   }

  return (
    <div className='managaAll-container'>
      <section >
        <h3 className='admin-containerHeading'>Manage Publications</h3>
        <div className='publications-section cardContainer'>
        {Publications.length > 0 ? (
          publications.map((pub)=>(
            <div key = {pub.id} className='Card Ma-Card'> 
              <h4 className='title'>{pub.title}</h4>
              <p> {pub.author}</p>
              <p>{pub.date} </p>
              <p>{pub.intro}</p>
              <div className='btn-container'>
                <div className='ED-btns'>
              <button onClick={() => console.log(`Editing ${pub.id}`)}><CiEdit /></button>
              <button onClick={() => handleDeletePublication(pub.id)} className='delete'><MdOutlineDeleteOutline /></button>
                </div>
              <button className='Save'>Save</button>
              </div>
            </div>

          ))
        ):(
          <p>No publications found</p>
        )}

        </div>
      </section>
      <section>
        <h3 className='admin-containerHeading'> Manage All Properties</h3>
        <div className='properties-section'>
        {Properties.length > 0 ? (
          properties.map((prop) => (
            <div key={prop.id} className="Card Ma-Card">
              <p>{prop.description}</p>
              <p>{prop.price}</p>
              <p>{prop.location}</p>
              <div className='btn-container'>
              <div className='ED-btns'>
              <button onClick={() => console.log(`Editing ${prop.id}`)}><CiEdit /></button>
              <button onClick={() => handleDeleteProperty(prop.id)} className='delete'><MdOutlineDeleteOutline /></button>
                </div>
              <button className='Save'>Save</button>
              </div>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}

        </div>
      </section>  
      </div>
  )
}

export default ManageAll
