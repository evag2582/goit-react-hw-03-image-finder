import React, { useState, useEffect } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import LoadMoreButton from '../Button/LoadMoreButton';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

const ImageGallery = ({ images, onLoadMore, loading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const renderImageRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += 4) {
      const rowImages = images.slice(i, i + 4);
      const row = (
        <div key={i} className='imageGalery'>
          {rowImages.map((image) => (
            <ImageGalleryItem key={image.id} image={image} onClick={() => handleImageClick(image)} />
          ))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };

  useEffect(() => {
    // Cuando las imágenes se cargan por primera vez, establece hasSearched en true
    setHasSearched(true);
  }, [images]);

  return (
    <div className='galleryItem'>
      {renderImageRows()}
      {loading && <Loader />}
      {hasSearched && !loading && <LoadMoreButton onClick={onLoadMore} />}
      {selectedImage && <Modal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default ImageGallery;
