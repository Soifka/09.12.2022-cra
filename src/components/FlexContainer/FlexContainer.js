import React, { Component } from 'react';
import FlexChild from './FlexChild';

class FlexContainer extends Component {
    render() {
        return (
            <FlexChild flexDirection='row' alignItems='stretch' justifyContent='center'>
                <div>Hello</div>
                <div>Bye-bye</div>
            </FlexChild>
        );
    }
}

export default FlexContainer;
