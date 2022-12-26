import React from 'react';
import Innerchild from './Innerchild';

const Child = () => {
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            Child
            <Innerchild />
        </div>
    );
}

export default Child;
