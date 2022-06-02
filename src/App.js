import React, { useState } from 'react';
import './App.css';
import { Layout } from './UI/Layout/Layout';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Notes } from './components/Notes/Notes';

export default function App() {
  const [notes, setNotes] = useState([]);
  const uniqueId = () => {
    const id = Math.floor(Math.random() * 1000);
    const hasId = notes.map((note) => note.id === id);
    if (hasId.includes(true)) return uniqueId;
    return id;
  };
  const noteObj = (text) => ({
    id: uniqueId(),
    text,
  });
  const deleteNote = (id) =>
    setNotes((oldState) => oldState.filter((note) => !(note.id === id)));
  const sendNote = (text) =>
    setNotes((oldState) => [...oldState, noteObj(text)]);

  return (
    <>
      <Layout>
        <Navbar />
        <Search />
        <Notes notes={notes} deleteNote={deleteNote} sendNote={sendNote} />
      </Layout>
    </>
  );
}
