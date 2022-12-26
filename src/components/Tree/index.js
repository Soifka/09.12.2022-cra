import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Parent from './Parent';

const Tree = () => {
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            Tree
            <Parent />
        </div>
    );
}

export default Tree;
