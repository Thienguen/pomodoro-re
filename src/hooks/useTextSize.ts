'use client'

import { useState, useEffect } from 'react';

const useTextSize = () => {
  // Initialize with default values
  const [screenSize, setScreenSize] = useState({
    width: 800,   // Default width
    height: 600,  // Default height
  });

  const getTextSize = () => {
    return screenSize.width / screenSize.height;
  };

  useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Update the state with actual window dimensions once the hook is used
    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return getTextSize;
};

export default useTextSize;