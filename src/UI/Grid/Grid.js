import React from 'react';
import styles from './Grid.module.css';

export const Grid = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
