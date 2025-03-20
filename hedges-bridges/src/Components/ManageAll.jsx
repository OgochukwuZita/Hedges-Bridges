import React, { useState } from "react";
import publicationsData from "../Components/data"; 
import { properties as propertiesData } from "../Components/data";
import EditPublicationForm from "../Components/EditPub";
import EditPropertyForm from "../Components/EditProp";
import "../Styles/ManageAll.css";
import "../Styles/Properties.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ManageAll = () => {
  const [Publications, setPublications] = useState(publicationsData);
  const [Properties, setProperties] = useState(propertiesData);

  const [editingPubId, setEditingPubId] = useState(null);
  const [editingPropId, setEditingPropId] = useState(null);

  const [editedPublication, setEditedPublication] = useState({});
  const [editedProperty, setEditedProperty] = useState({});

  const handleDeletePublication = (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      setPublications(Publications.filter((pub) => pub.id !== id));
    }
  };

  const handleDeleteProperty = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setProperties(Properties.filter((prop) => prop.id !== id));
    }
  };

  const handleEditPublication = (pub) => {
    setEditingPubId(pub.id);
    setEditedPublication({ ...pub });
  };

  const handleEditProperty = (prop) => {
    setEditingPropId(prop.id);
    setEditedProperty({ ...prop });
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "publication") {
      setEditedPublication((prev) => ({ ...prev, [name]: value }));
    } else {
      setEditedProperty((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSavePublication = () => {
    setEditingPubId(null); // Close modal first
    setPublications(
      Publications.map((pub) =>
        pub.id === editingPubId ? { ...pub, ...editedPublication } : pub
      )
    );
  };
  
  const handleSaveProperty = () => {
    setEditingPropId(null); // Close modal first
    setProperties(
      Properties.map((prop) =>
        prop.id === editingPropId ? { ...prop, ...editedProperty } : prop
      )
    );
  };
  
  return (
    <div className="manageAll-container">
      <div className="manageAll-sections">
              {/* Manage Publications */}
      <section>
        <h3 className="admin-containerHeading">Manage Publications</h3>
        <div className="publications-section cardContainer">
          {Publications.length > 0 ? (
            Publications.map((pub) => (
              <div key={pub.id} className="Card Ma-Card">
                <h4 className="title">{pub.title}</h4>
                <p>Author: {pub.author}</p>
                <p>Date: {pub.date}</p>
                <p>Intro: {pub.intro || 'Not available'}</p>

                <div className="btn-container">
                  <div className="ED-btns">
                    <button onClick={() => handleEditPublication(pub)}>
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => handleDeletePublication(pub.id)}
                      className="delete"
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No publications found</p>
          )}
        </div>
      </section>

      {/* Manage Properties */}
      <section>
        <h3 className="admin-containerHeading">Manage All Properties</h3>
        <div className="properties-section">
          {Properties.length > 0 ? (
            Properties.map((prop) => (
              <div key={prop.id} className="Card Ma-Card">
                <p>Description: {prop.description}</p>
                <p>Price: {prop.price}</p>
                <p>Location: {prop.location}</p>

                <div className="btn-container">
                  <div className="ED-btns">
                    <button onClick={() => handleEditProperty(prop)}>
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteProperty(prop.id)}
                      className="delete"
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>
      </section>

      </div>

      {(editingPubId || editingPropId) && (
  <div className="manageForm-modal">
    <div className="closeBtn" onClick={() => { 
        setEditingPubId(null);
        setEditingPropId(null);
      }}>
      <IoMdClose />
    </div>

    {editingPubId && (
      <div className="edit-form-container">
        <EditPublicationForm
          publication={editedPublication}
          onSave={handleSavePublication}
          onCancel={() => setEditingPubId(null)}
          onChange={(e) => handleInputChange(e, "publication")}
        />
      </div>
    )}

    {editingPropId && (
      <div className="edit-form-container">
        <EditPropertyForm
          property={editedProperty}
          onSave={handleSaveProperty}
          onCancel={() => setEditingPropId(null)}
          onChange={(e) => handleInputChange(e, "property")}
        />
      </div>
    )}
  </div>
)}
    </div>
  );
};

export default ManageAll;
