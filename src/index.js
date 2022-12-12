import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Aloha from './components/Aloha/Aloha';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <App />
      <Aloha name="Alex" country="USA" />
      <Aloha name="Julia" country="Australia" />
      <Aloha name="Masha" country="Ukraine" />
  </>
);
