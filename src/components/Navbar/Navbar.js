import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { ThemeContext } from '../../context/ThemeProvider';

export const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={darkMode ? styles['logo-dark'] : styles['logo-light']}>
          React Notes
        </h1>
      </div>

      <div>
        <ul>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </div>
  );
};
