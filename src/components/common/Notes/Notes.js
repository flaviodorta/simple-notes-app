import React from 'react';
import { Grid } from '../../UI/Grid/Grid';
import { Note } from './Note/Note';
import { WriteNote } from './WriteNote/WriteNote';

export const Notes = ({ notes, deleteNote, sendNote }) => {
  return (
    <Grid>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <WriteNote sendNote={sendNote} />
    </Grid>
  );
};
