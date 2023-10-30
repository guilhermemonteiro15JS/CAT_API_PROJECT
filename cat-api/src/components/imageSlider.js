import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      }
    };

   
    fetchImages();

    
    const intervalId = setInterval(fetchImages, 25000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-container">
      {images.length > 0 && (
        <img
        src={images.length > 0 && images[currentIndex].url}
        alt={`Imagem ${currentIndex + 1}`}
        style={{
          width: '70vh',
          height: '70vh',
          animation: 'slide 25s infinite',
        }}
      />
      )}
    </div>
  );
};

export default ImageSlider;
