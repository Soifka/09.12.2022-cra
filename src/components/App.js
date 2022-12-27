//import App from './components/App/App';
//import AlohaDashboard from "./AlohaDashboard/AlohaDashboard";
// import ToDoList from "./ToDoList/ToDoList";
// import CounterPage from "./Counter/CounterPage";
// import UserList from "./UsersList/UserList";
// import Scene from "./Scene/Scene";
//import SignInForm from "./SignInForm";
//import UsersFilter from "./UsersFilter/UsersFilter";
//import HelloParent from "./HelloForm/HelloParent";
// import MyUsers from "./RegistrationForm/MyUsers";
//import List from "./List";
//import FlexContainer from "./FlexContainer/FlexContainer";

//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import DataProvider from "./DataProvider";

import React, { Component } from 'react';
import Tree from './Tree';
import { UserContext } from '../contexts/userContext';
import { ThemeContext } from '../contexts/themeContext';
import CONSTANTS from '../constants';
const { THEMES } = CONSTANTS;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivan.ivanov@MediaList.com',
        avatar: 'https://robohash.org/Ivanov Ivan'
      },
      theme: THEMES.LIGHT
    }
  }

  setTheme = (theme) => {
    this.setState({
      theme
    })
  }

  logOut = () => {
    this.setState({
      user: {}
    })
  }
  
  render() {
    const { theme } = this.state;
    return (
      <div>
        App
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={{
            user: this.state.user,
            logOut: this.logOut
            }}>
            <Tree />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}


/*
function App() {
  return (
  <>
    <DataProvider loadData={() => {
        return fetch('./phones.json')
        .then((response) => response.json())}}>
        
        {(state) => {
          const { data, isLoading, isError } = state;
          return (
            <>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error!</div>}
              <ul>
                {data.map((data, index) => 
                <li key={index}>{data.brand} {data.model}. Price: {data.price} </li>
                )}
              </ul>
            </>
          )
        }}

    </DataProvider> 
    
    <DataProvider loadData={() => {
      return fetch('./tv.json')
      .then((response) => response.json())}}>
      
      {(state) => {
        const { data, isLoading, isError } = state;
        return (
          <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            <ul>
              {data.map((data, index) => 
              <li key={index}>BIG SALE!!! {data.brand} {data.model}. Price: {data.price} </li>
              )}
            </ul>
          </>
        )
      }}

    </DataProvider> 
  </>

    // <ToDoList />
    // <SignInForm />
    // <UsersFilter />
    // <HelloParent />
    // <MyUsers />
    // <List />
    // <FlexContainer />
  );
}
*/

export default App;