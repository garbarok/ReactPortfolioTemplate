import React, { createContext, useState, useContext } from 'react';

const ImageCacheContext = createContext({});

export const useImageCache = () => useContext(ImageCacheContext);

export const ImageCacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const preloadImage = (src) => {
    if (cache[src]) {
      return;
    }

    const img = new Image();
    img.onload = () => {
      setCache((prevCache) => ({ ...prevCache, [src]: img }));
    };
    img.src = src;
  };

  return (
    <ImageCacheContext.Provider value={{ cache, preloadImage }}>
      {children}
    </ImageCacheContext.Provider>
  );
};
