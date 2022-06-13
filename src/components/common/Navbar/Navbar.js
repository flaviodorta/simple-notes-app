import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { ThemeContext } from '../../../styles/theme/Theme';

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div>
        <h1
          className={
            theme === 'dark' ? styles['logo-dark'] : styles['logo-light']
          }
        >
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
