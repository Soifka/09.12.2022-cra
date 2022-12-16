import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './components/App/App';
//import AlohaDashboard from './components/AlohaDashboard/AlohaDashboard';
// import ToDoList from './components/ToDoList/ToDoList';
//import Scene from './components/Scene.js/Scene';
//import CounterPage from './components/Counter/CounterPage';
import UserList from './components/UsersList/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      {/* <App /> */}
      {/* <AlohaDashboard /> */}
      {/* <ToDoList /> */}
      {/* <Scene /> */}
      {/* <CounterPage /> */}
      <UserList />
  </>
);
