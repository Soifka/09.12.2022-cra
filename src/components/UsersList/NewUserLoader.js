import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import {getUsers} from '../../api';
import styles from './style.css'


const NewUserLoader = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        load()
    }, [])

    const load = () => {
        getUsers(1000, page)
        .then(data => {
            const { results } = data;
            setUsers(results);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        }) 
    }

    const prevBtnHandler = (event) => {
        setPage(page > 1 ? page - 1 : 1);
        console.dir(event);
    }

    const nextBtnHandler = () => {
        setPage(page + 1);
    }
    
    return (
        <>
            <button onClick={prevBtnHandler}>Previous page</button>
            <button onClick={nextBtnHandler}>Next page</button>
            <div className='card-container'>
                {users.length && users.map((user) => <UserCard user={user} />)}
            </div>
        </>
    );
}

export default NewUserLoader;
