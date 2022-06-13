import { createNoteObject } from '../../helper-functions';
import { DELETE_NOTE, SEND_NOTE } from '../types/noteTypes';

const initialState = {
  notes: [],
};

export const noteReducer = (state = initialState, action) => {
  if (action.type === SEND_NOTE) {
    return {
      ...state,
      notes: [...state.notes, createNoteObject(action.payload)],
    };
  }

  if (action.type === DELETE_NOTE) {
    return {
      ...state,
      notes: state.filter((note) => !(note.id === action.payload)),
    };
  }

  return state;
};
