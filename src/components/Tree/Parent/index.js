import React from 'react';
//import SubparentWithContext from './Subparent';
import Subparent from './Subparent';


const Parent = () => {
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            Parent
            <Subparent />
        </div>
    );
}

export default Parent;
