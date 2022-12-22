//import App from './components/App/App';
import AlohaDashboard from "./AlohaDashboard/AlohaDashboard";
// import ToDoList from "./ToDoList/ToDoList";
import CounterPage from "./Counter/CounterPage";
import UserList from "./UsersList/UserList";
import Scene from "./Scene/Scene";
//import SignInForm from "./SignInForm";
//import UsersFilter from "./UsersFilter/UsersFilter";
//import HelloParent from "./HelloForm/HelloParent";
import MyUsers from "./RegistrationForm/MyUsers";
//import List from "./List";
//import FlexContainer from "./FlexContainer/FlexContainer";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"aloha"}>Go to Aloha</Link>
          </li>
          <li>
            <Link to={"users"}>Go to Users</Link>
          </li>
          <li>
            <Link to={"counter"}>Go to Counter</Link>
          </li>
          <li>
            <Link to={"scene"}>Go to Scene</Link>
          </li>
          <li>
            <Link to={"registrationform"}>Go to Registration form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route /*path="/"*/index element={<Home />} />  
        <Route path="/aloha" element={<AlohaDashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/scene" element={<Scene />} />
        <Route path="/registrationform" element={<MyUsers />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    // <ToDoList />
    // <SignInForm />
    // <UsersFilter />
    // <HelloParent />
    // <MyUsers />
    // <List />
    // <FlexContainer />
  );
}

export default App;

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};

const NotFound = () => {
  return (
    <>
    <h1>404 PAGE NOT FOUND</h1>
    <p>Please, try later</p>
    </>
  )
}
