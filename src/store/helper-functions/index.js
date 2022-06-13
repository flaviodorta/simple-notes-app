import { noteStore } from '../Notes/NoteStore';

export const uniqueId = (array) => {
  const id = Math.floor(Math.random() * array.length * 2);
  const hasId = array.map((idx) => idx === id);
  console.log(hasId, ' ', id);
  if (hasId.includes(true)) return uniqueId(array);
  else return [id];
};

export const createNoteObject = (text) => {
  return {
    id: uniqueId(getNoteStore()),
    text: text,
  };
};

export const getNoteStore = () => noteStore.getValue();
