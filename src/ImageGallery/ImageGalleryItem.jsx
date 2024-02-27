// ImageGalleryItem.js
import React from 'react';
import css from '../styles.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <div className='ImageGalleryItem' onClick={onClick}>
      <img
        src={image.previewURL}
        alt={image.tags}
        className={css.Image}
      />
    </div>
  );
};

export default ImageGalleryItem;
