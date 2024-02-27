// App.js
import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=42210777-b6deb6611b35663b5798ce406&q=${query}&image_type=photo&per_page=12&page=${page}`
        );
        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
        setHasSearched(true); // Marcar que se ha realizado la primera búsqueda
      }
    };

    if (query !== '') {
      fetchImages();
    }
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1); // Resetear la página al realizar una nueva búsqueda
    setHasSearched(false); // Reiniciar el estado de la primera búsqueda
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSearch={handleSearch} />
      <ImageGallery images={images} onImageClick={() => {}} onLoadMore={handleLoadMore} loading={loading && !hasSearched} />
    </div>
  );
};

export default App;
