import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  console.log(localStorage.getItem('darkMode'));
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode'));
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
