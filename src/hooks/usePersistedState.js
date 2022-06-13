import { useEffect, useState } from 'react';

export const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    console.log(storageValue);
    if (storageValue) {
      console.log(localStorage.getItem(key));
      return storageValue;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
