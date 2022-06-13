import React, { useContext } from 'react';
import styles from './Layout.module.css';
import { ThemeContext } from '../../../styles/theme/Theme';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === 'dark' ? styles['container-dark'] : styles['container-light']
      }
    >
      {children}
    </div>
  );
};
