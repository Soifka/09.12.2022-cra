import React from "react";
import Aloha from "../Aloha/Aloha";


class AlohaDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        usersArray: [
            {
                id: 1,
                firstName: 'Tony',
                lastName: 'Stark'
            },
            {
                id: 2,
                firstName: 'Bruce',
                lastName: 'Brenner'
            },
            {
                
                id: 3,
                firstName: 'Thor',
                lastName: 'Odinson'
            },
            {
                id: 4,
                firstName: 'Peter',
                lastName: 'Parker'
            },
            {
                id: 5,
                firstName: 'Natasha',
                lastName: 'Romanof'
            }
        ]
    }
  }  

  userToAloha() {
    const {usersArray} = this.state;
    return usersArray.map((user) => <Aloha key={user.id} name={user.firstName} lastName={user.lastName} />)
  }
  
  sortUsers() {
    const {usersArray} = this.state;
    const newArray = [...usersArray]; // создаем поверхностную копию массива usersArray
    newArray.sort((a, b) => {
        if(a.firstName > b.firstName) {
            return 1;
        }
        return -1; 
    });

    this.setState({
        usersArray: newArray
    })
  }

  render() {
    return (
      <>
        {this.userToAloha()}
        <button onClick = {() => {this.sortUsers()}}>Sort</button>
      </>
    );
  }
}

export default AlohaDashboard;
