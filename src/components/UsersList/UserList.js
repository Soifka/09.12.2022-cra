import React from "react";
import {getUsers} from '../../api/index';
import UserCard from "./UserCard";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
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

    render() {
        const { users } = this.state;
        return (
            <>
            <ul>
                <h1>Hello</h1>
                {users.length ? <UserCard user={users[0]} /> : <h2>Users haven't loaded yet</h2>}
            </ul>
            </>
        )
    }
}

export default UserList;