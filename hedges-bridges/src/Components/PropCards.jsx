import React, { useState } from 'react';
import '../Styles/properties.css';
import { properties } from '../Components/data';

const PropCards = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageViewerActive, setImageViewerActive] = useState(false);

  const openModal = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setImageViewerActive(false);
  };

  const openImageViewer = () => {
    setImageViewerActive(true);
  };

  const closeImageViewer = () => {
    setImageViewerActive(false);
  };

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
          <div className="imageContainer" onClick={() => openModal(property)}>
            <img
              src={property.images[0] || '/default-image.jpg'}
              alt="property"
              className="propImage"
            />
            <span className="image-count">
              1/{property.images.length}
            </span>
          </div>
          <p className="propDescription">{property.description}</p>
          <p className="propPrice">{property.price}</p>
          <button className="offerBtn" onClick={() => openModal(property)}>
            Make an Offer
          </button>
        </div>
      ))}

      {selectedProperty && (
        <div className="modalOverlay">
          <div className="modalContent">
            {!isImageViewerActive ? (
              <>
                <p>Reach out regarding: {selectedProperty.description}</p>
                <ul>
                  <li>
                    <strong>Call:</strong>{' '}
                    <a href="tel:+2347061214768">+2347061214768</a>
                  </li>
                  <li>
                    <strong>WhatsApp:</strong>{' '}
                    <a
                      href="https://wa.me/123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:email@example.com">Mail</a>
                  </li>
                </ul>
                <button className="closeBtn" onClick={closeModal}>
                  X
                </button>
                <button className="viewAll" onClick={openImageViewer}>
                  View All
                </button>
              </>
            ) : (
              <div className="imageViewer">
                <button className="closeBtn" onClick={closeImageViewer}>
                  X
                </button>
                <div className="imageViewerContent">
                  <button className="prevImage" onClick={prevImage}>
                    -
                  </button>
                  <img
                    src={selectedProperty.images[currentImageIndex]}
                    alt="property view"
                    className="imageViewerImage"
                  />
                  <span className="imageCounter">
                    {currentImageIndex + 1}/{selectedProperty.images.length}
                  </span>
                  <button className="nxtImage" onClick={nextImage}>
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropCards;
