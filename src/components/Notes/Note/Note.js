import React from 'react';
import styles from './Note.module.css';

export const Note = ({ id, text, deleteNote }) => {
  console.log(id);
  console.log(typeof deleteNote);
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <div className={styles.row2}>
        <button className={styles.button} onClick={() => deleteNote(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
