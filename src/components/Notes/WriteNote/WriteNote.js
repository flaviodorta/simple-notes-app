import React, { useState } from 'react';
import styles from './WriteNote.module.css';
import { useOnKeyPress } from '../../../hooks/useOnKeyPress';

export const WriteNote = ({ sendNote }) => {
  const [text, setText] = useState('');
  const handleText = (e) => setText(e.target.value);
  const send = () => {
    sendNote(text);
    setText('');
  };
  useOnKeyPress(send, 'Enter');
  return (
    <div className={styles.container}>
      <textarea
        placeholder='write some text...'
        id='text'
        value={text}
        onChange={handleText}
      />
      <div className={styles.row2}>
        <button className={styles.button} onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
};
