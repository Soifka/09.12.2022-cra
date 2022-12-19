import React from "react";
import User from "./User";
import { getUsersList } from "../../api";
import './style.css';

class UsersFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            numberOfUsers: '',
            searchValue: ''
        }
    }

    componentDidUpdate() {
        const { numberOfUsers } = this.state;

        getUsersList(numberOfUsers).then((data) => {
            const { results } = data;
            this.setState({
                users: results
            })
        });
        console.log(this.state.users);
    }

    /*
    universalSubmitHandler = (event) => {
        event.preventDefault();
        const {name, value} = event.target[0];
        this.setState({
            [name]: value
        })

        console.log(this.state.numberOfUsers);
        console.log(this.state.searchValue);
    }
    */

    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    renderUser() {
        
    }

    render() {
        //const { numberOfUsers, searchValue } = this.state;
        
        return (
            <>
            <div className="wrapper">
            <form onSubmit={this.componentDidUpdate}>
                <label>
                    Number of users in the list
                    <input onChange={this.universalChangeHandler} type='text' name="numberOfUsers" /*value={numberOfUsers}*/ />
                </label>
                <button type="submit">Get list</button>
            </form>
            <form onSubmit={this.universalSubmitHandler}>
                <label>
                    Search users in the list
                    <input onChange={this.universalChangeHandler} type='text' name="searchValue" /*value={searchValue}*/ />
                </label>
                <button type="submit">Filter</button>
            </form>
            
            </div>
            {/* <User users={this.state.users} /> */}
            </>
        )
    }
}

export default UsersFilter;