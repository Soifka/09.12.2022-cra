import React from 'react';
import { withUser } from '../../../../../../HOC';

const Innerchild = (props) => {
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            <p>Innerchild</p>
            <p>{JSON.stringify(props.user)}</p>
            <button onClick={props.logOut}>Logout</button>
        </div>        
    )       
}

const InnerchildWithUserContext = (props) => {
    const InnerchildWithUserContext = withUser(Innerchild);
    return <InnerchildWithUserContext />
}

export default InnerchildWithUserContext;
