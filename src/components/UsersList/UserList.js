import React from "react";
import {getUsers} from '../../api/index';
import UserCard from "./UserCard";
import './style.css';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            searchValue: ''
        }
    }

    componentDidMount() {
        getUsers().then((data) => {
            const { results } = data;
            this.setState({
                users: results
            })
        });
    }

    handleSearch = (event) => {
        if(event.target.value === '') {
            this.setState({
                searchValue: '',
                filteredUsers: []
            })
            return;
        }

        this.setState({
            searchValue: event.target.value
        })
        
        const searchValueLowerCase = this.state.searchValue.toLowerCase();
        const filteredUsers = this.state.users.filter((user) => {
            return user.name.last.toLowerCase().includes(searchValueLowerCase, 0)
        })

        console.log('filtered!!!', filteredUsers);

        this.setState({
            filteredUsers   // это то же самое, что и написать   filteredUsers: filteredUsers
        })
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length > 0 ? filteredUsers.map((user) => <UserCard user={user} />) : users.map((user) => <UserCard user={user} />)
    }

    render() {
        const { users } = this.state;
        return (
            <>
                <h1>USERS</h1>

                <input 
                type='text' 
                autoComplete="off" 
                placeholder="Поиск юзера по фамилии"
                onChange={this.handleSearch}
                />

                <section className="card-container">
                    {users.length ? this.renderUsers() : <h2>Users haven't loaded yet</h2>}
                </section>
            </>
        )
    }
}

export default UserList;