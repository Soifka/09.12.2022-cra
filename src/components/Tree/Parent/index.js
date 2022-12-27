import React from 'react';
import SubparentWithContext from './Subparent';

const Parent = () => {
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            Parent
            <SubparentWithContext />
        </div>
    );
}

export default Parent;
