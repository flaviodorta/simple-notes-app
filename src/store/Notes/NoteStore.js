import { createStore } from 'redux';
import { noteReducer } from './reducer/noteReducers';

export const noteStore = createStore(noteReducer);
