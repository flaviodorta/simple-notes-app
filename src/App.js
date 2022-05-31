import React from 'react';
import { Layout } from './UI/Layout/Layout';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Notes } from './components/Notes/Notes';
import { Button } from 'antd';

export default function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Search />
        <Notes />
        <Button>Test</Button>
      </Layout>
    </>
  );
}
