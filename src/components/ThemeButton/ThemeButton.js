import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

export const ThemeButton = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setDarkMode((s) => !s);
    localStorage.setItem('darkMode', darkMode);
  };

  return <button onClick={toggleDarkMode}>Dark Mode</button>;
};
