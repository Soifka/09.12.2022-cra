import React from 'react';
import InnerchildWithUserContext from './Innerchild';

const Child = () => {
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            Child
            <InnerchildWithUserContext />
        </div>
    );
}

export default Child;
