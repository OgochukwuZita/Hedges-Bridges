import React, {useState} from 'react'
import '../Styles/Admin.css'

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

  const handleFileChange = (e) => {
    setPublication({ ...publication, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Publication Saved:", publication);
  };

  return (
    <div className="Pform-container">
      <form onSubmit={handleSubmit}>
        <h2 className="admin-containerHeading">Manage Publications</h2>

        <div className="formField">
          <label htmlFor="topic">Topic:</label>
          <input type="text" name="topic" placeholder="Topic" onChange={handleChange} required />
        </div>

        <div className="formField">
          <label htmlFor="date">Date Published:</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>

        <div className="formField">
          <label htmlFor="author">Written By:</label>
          <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        </div>

        <div className="formField">
          <label htmlFor="intro">Introduction:</label>
          <textarea name="intro" placeholder="Introduction" onChange={handleChange} required />
        </div>

        <div className="formField">
          <label htmlFor="image">Upload Image (Optional):</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>

        <div className="formField">
          <label htmlFor="fullArticle">Write Article:</label>
          <textarea name="fullArticle" id="fullArticle" placeholder='Start writing your article here... (Use headings, paragraphs, and spacing for readability'></textarea>

        </div>

        <div className="btnContainer">
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default PublicationsForm;