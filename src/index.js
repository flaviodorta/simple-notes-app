import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './styles/theme/Theme';
import { Provider } from 'react-redux';
import { noteStore } from './store/Notes/NoteStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={noteStore}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
