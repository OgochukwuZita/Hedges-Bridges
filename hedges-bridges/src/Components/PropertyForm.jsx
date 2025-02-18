import React, {useState} from 'react'

const PropertyForm = () => {
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
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Manage Properties</h2>
      <input type="file" multiple name="images" onChange={handleImageChange} />
      <input type="text" name="price" placeholder="Price" onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default PropertyForm
