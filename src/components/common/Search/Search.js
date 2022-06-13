import React from 'react';
import styles from './Search.module.css';

export const Search = () => {
  return (
    <div className={styles.container}>
      <input type='text' className={styles.search} placeholder='find a note' />
    </div>
  );
};
