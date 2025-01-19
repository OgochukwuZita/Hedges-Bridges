import React, { useState } from "react";
import "../Styles/properties.css";
import { properties } from "../Components/data";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const PropCards = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageViewerActive, setImageViewerActive] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  // Open Modal
  const openModal = (property) => {
    setSelectedProperty(property);
    setModalActive(true);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProperty(null);
    setModalActive(false);
  };

  // Open Image Viewer
  const openImageViewer = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0); // Start with the first image
    setImageViewerActive(true);
  };

  // Close Image Viewer
  const closeImageViewer = () => {
    setImageViewerActive(false);
  };

  // Navigate Images
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === selectedProperty.images.length ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="propContainer">
      {properties.map((property) => (
        <div className="Card propCard" key={property.id}>
          {/* Image Section */}
          <div
            className="imageContainer"
            onClick={() => openImageViewer(property)}
          >
            <img src={property.images[0]} alt="property" className="propImage" />
            <span className="imageCount">
              1/{property.images.length}
            </span>
          </div>

          {/* Property Details */}
          <div className="propDetails">
          <p>Description: {property.description}</p>
          <p>Price: {property.price}</p>
          <p>Location: {property.location}</p>
          </div>
          <button className="offerBtn" onClick={() => openModal(property)}>
            Make an Offer
          </button>
                {/* Modal for Contact Methods */}
      {isModalActive && selectedProperty && (
        <div className="modalOverlay">
          <div className="modalContent">
            {/* <p>Reach out regarding: {selectedProperty.description}</p> */}
            <ul>
              <li>
              <span><IoCallSharp /></span>
                <a
                  href="tel:+2348101957958"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call
                </a>
              </li>
              <li>
              <span><RiWhatsappFill /></span>
                <a
                  href="https://wa.me/123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Chat
                </a>
              </li>
              <li>
              <span><MdOutlineEmail /></span>
                <a href="hedges.bridges@gmail.com" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </li>
            </ul>
            <button className="modalCloseBtn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}

        </div>
      ))}


      {/* Image Viewer */}
      {isImageViewerActive && selectedProperty && (
        <div className="imageViewerOverlay">
          <div className="imageViewerContent">
            <button className="imageViewerCloseBtn" onClick={closeImageViewer}>
              X
            </button>
            <img
              src={selectedProperty.images[currentImageIndex]}
              alt="property view"
              className="imageViewerImage"
            />
            <div className="description">
            <p>Description: {selectedProperty.description}</p>
            </div>
            <div className="btns">
            <button className="prevImage" onClick={prevImage}>
            <GrPrevious />
            </button>
            <button className="nextImage" onClick={nextImage}>
            <GrNext />
            </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default PropCards;
