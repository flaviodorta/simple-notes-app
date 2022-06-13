import './App.css';
import { Layout } from './components/UI/Layout/Layout';
import { Navbar } from './components/common/Navbar/Navbar';
import { Search } from './components/common/Search/Search';
import { Notes } from './components/common/Notes/Notes';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const sendNote = (text) => dispatch(sendNote(text));
  const deleteNote = (id) => dispatch(deleteNote(id));

  return (
    <>
      <Layout>
        <Navbar />
        <Search />
        <Notes notes={notes} sendNote={sendNote} deleteNote={deleteNote} />
      </Layout>
    </>
  );
}
