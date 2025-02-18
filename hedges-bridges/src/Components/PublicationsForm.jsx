import React, {useState} from 'react'

const PublicationsForm = () => {
    const [publication, setPublication] = useState({
      topic: "",
      date: "",
      author: "",
      intro: "",
      image: "",
      fullArticle: "",
    });
  
    const handleChange = (e) => {
      setPublication({ ...publication, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Publication Saved:", publication);
    };
 return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Manage Publications</h2>
      <input type="text" name="topic" placeholder="Topic" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} />
      <textarea name="intro" placeholder="Introduction" onChange={handleChange} />
      <input type="file" name="image" onChange={handleChange} />
      <textarea name="fullArticle" placeholder="Full Article" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};
export default PublicationsForm
