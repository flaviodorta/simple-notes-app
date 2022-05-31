import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.logo}>React Notes</h1>
      </div>

      <div>
        <ul>
          <li>
            <button>Toggle Mode</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
