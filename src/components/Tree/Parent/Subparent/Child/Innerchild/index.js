import React from 'react';
import { MyContext } from '../../../../../../contexts/userContext';

const Innerchild = () => {
    return (
        <MyContext.Consumer>
            {
                (value) => {
                    return (
                        <p>{JSON.stringify(value)}</p>
                    )
                }
            }
        </MyContext.Consumer>
        // <div>
        //     Innerchild
        // </div>
    );
}

export default Innerchild;
