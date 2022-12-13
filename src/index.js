import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './components/App/App';
//import AlohaDashboard from './components/AlohaDashboard/AlohaDashboard';
//import ToDoList from './components/ToDoList/ToDoList';
import Scene from './components/Scene.js/Scene';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      {/* <App />
      <AlohaDashboard />
      <ToDoList /> */}
      <Scene />
  </>
);
