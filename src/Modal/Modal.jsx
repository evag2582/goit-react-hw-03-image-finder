import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className='Overlay' onClick={onClose}>
      <div className='Modal'>
        <img src={image.largeImageURL} alt={image.tags} className='modal-image' />
      </div>
    </div>
  );
};

export default Modal;
