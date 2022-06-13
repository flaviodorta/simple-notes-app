import { SEND_NOTE, DELETE_NOTE } from '../types/noteTypes';

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

export const sendNote = (text) => {
  return {
    type: SEND_NOTE,
    payload: text,
  };
};
