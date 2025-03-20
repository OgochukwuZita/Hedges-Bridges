import React, {useState} from 'react'
import '../Styles/Admin.css'

const EditProp = () => {
    const [property, setProperty] = useState({
      images: [],
      price: "",
      location: "",
      description: "",
    });
  
    const handleChange = (e) => {
      setProperty({ ...property, [e.target.name]: e.target.value });
    };
  
    const handleImageChange = (e) => {
      setProperty({ ...property, images: [...e.target.files] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Property Saved:", property);
    };
  
  return (
<div className="Pform-container">
    <form onSubmit={handleSubmit} >
      <h2 className='admin-containerHeading'>Edit Property</h2>
      <div className='formField'>
        <label htmlFor="images">Upload images:</label>
        <input type="file" multiple name="images" onChange={handleImageChange} required/>
      </div>
      <div className='formField'>
        <label htmlFor="price">Price:</label>
      <input type="text" name="price" placeholder="Price" onChange={handleChange} required/>
      </div>
      <div className='formField'>
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required/>
      </div>
      <div>
        <label htmlFor="descriotion">Description:</label>
      <textarea name="description" placeholder="Description" onChange={handleChange} required/>
      </div>
      <div className='btnContainer editBtns'>
      <button type="submit" >Save</button>
      <button>Cancel</button>
      </div>
    </form>

</div>
  )
}

export default EditProp

