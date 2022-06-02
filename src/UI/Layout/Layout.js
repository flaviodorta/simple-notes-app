import React, { useContext } from 'react';
import styles from './Layout.module.css';
import { ThemeContext } from '../../context/ThemeProvider';

export const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode ? styles['container-dark'] : styles['container-light']
      }
    >
      {children}
    </div>
  );
};
