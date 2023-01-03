import React, { useContext } from 'react';
//import { withUser } from '../../../../../../HOC';
import { UserContext } from '../../../../../../contexts/userContext';

const Innerchild = (props) => {
    const {user, logOut} = useContext(UserContext);
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            <p>Innerchild</p>
            <p>{JSON.stringify(user)}</p>
            <button onClick={logOut}>Logout</button>
        </div>        
    )       
}

// const InnerchildWithUserContext = (props) => {
//     const InnerchildWithUserContext = withUser(Innerchild);
//     return <InnerchildWithUserContext />
// }

//export default InnerchildWithUserContext;

export default Innerchild;
