import React, {useState} from 'react'
import '../Styles/Admin.css'
import { RichTextEditor } from "@mantine/rte";

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

        {/* Replace textarea with RichTextEditor */}
        <div className="formField">
          <label htmlFor="fullArticle">Write Article:</label>
          {/* <RichTextEditor value={publication.fullArticle} onChange={(value) => setPublication({ ...publication, fullArticle: value })} /> */}
          <RichTextEditor
  value={publication.fullArticle}
  onChange={(value) => setPublication({ ...publication, fullArticle: value })}
  className="custom-editor"
  styles={{
    root: {
      width: "100%", 
      maxWidth: "600px", 
      borderRadius: "15px",
      border: "1px solid #887a2b",
      backgroundColor: "#0D151C",
      color: "#fece",
      overflow: "hidden", 
    },
    content: {
      minHeight: "56px",
      padding: "8px 16px", 
      color: "#fece",
      fontSize: "16px",
      lineHeight: "1.5",
      background: "transparent", 
    },
    toolbar: {
      background: "#0D151C", 
      borderBottom: "1px solid #887a2b",
    },
  }}
/>
        </div>

        <div className="btnContainer">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PublicationsForm;