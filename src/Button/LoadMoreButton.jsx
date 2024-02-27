import React from 'react';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='Button'>
      Load More
    </button>
  );
};

export default LoadMoreButton;
