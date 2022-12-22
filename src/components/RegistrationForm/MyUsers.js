import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
//import styles from './style.module.scss';


class MyUsers extends Component {
constructor(props) {
    super(props);

    const users = []
    
    this.state = {
        users
    }
}

    getUsersInfo = (name, surname, age, email) => {
        const newObj = {
            name,
            surname,
            age,
            email
        }
        
        const { users } = this.state;
        const newUsers = [...users, newObj]

        this.setState({
            users: newUsers
        })
    }

    render() {
        return (
            <div>
                <RegistrationForm getUsersInfo={this.getUsersInfo} />
            </div>
        );
    }
}

export default MyUsers;
