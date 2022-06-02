import React, { useEffect } from 'react';

export const useOnKeyPress = (cb, key) => {
  useEffect(() => {
    const keyPressHandler = (e) => {
      if (e.key === key) {
        cb();
      }
    };
    window.addEventListener('keydown', keyPressHandler);
    return window.removeEventListener('keydown', keyPressHandler);
  }, [cb, key]);
};
