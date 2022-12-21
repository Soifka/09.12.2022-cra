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
            searchValue: '',
            page: 1,
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        this.loadUsers(this.state.page);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.page !== this.state.page) {
            this.loadUsers(this.state.page);
        }
        console.log(this.state.page)
    }

    loadUsers = (page) => {
        getUsers(page).then((data) => {
            const { results } = data;
            this.setState({
                users: results
            })
        })
        .catch((error) => {
            this.setState({
                isError: true
            })
        })
        .finally(() => {
            this.setState({
                isLoading: false
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

    prevBtnHandler = () => {
        this.setState({
            page: this.state.page > 1 ? this.state.page - 1 : this.state.page
        })
    }

    nextBtnHandler = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length > 0 ? filteredUsers.map((user) => <UserCard user={user} />) : users.map((user) => <UserCard user={user} />)
    }

    render() {
        const { users, isError, isLoading } = this.state;
        return (
            <>
                <h1>USERS</h1>

                <input 
                type='text' 
                autoComplete="off" 
                placeholder="Поиск юзера по фамилии"
                onChange={this.handleSearch}
                />
                <button onClick={this.prevBtnHandler}>Previous page</button>
                <button onClick={this.nextBtnHandler}>Next page</button>

                {isError && <h2>Error!!!</h2>}
                {isLoading && <h2>Users haven't loaded yet</h2>}
                <section className="card-container">
                    {users.length ? this.renderUsers() : null}
                </section>
            </>
        )
    }
}

export default UserList;