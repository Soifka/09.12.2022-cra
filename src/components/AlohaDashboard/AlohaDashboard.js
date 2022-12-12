import React from "react";
import Aloha from "../Aloha/Aloha";

const usersArray = [
    {
        firstName: 'Tony',
        lastName: 'Stark'
    },
    {
        firstName: 'Bruce',
        lastName: 'Brenner'
    },
    {
        firstName: 'Thor',
        lastName: 'Odinson'
    },
    {
        firstName: 'Peter',
        lastName: 'Parker'
    },
    {
        firstName: 'Natasha',
        lastName: 'Romanof'
    }
]

class AlohaDashboard extends React.Component {
  userToAloha() {
    return usersArray.map((user) => <Aloha name={user.firstName} lastName={user.lastName} />)
  }  

  render() {
    return (
      <>
        {this.userToAloha()}
      </>
    );
  }
}

export default AlohaDashboard;
