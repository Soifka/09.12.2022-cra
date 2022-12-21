import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
    render() {
        return (
           <Child>
            <h1>Greeting</h1>
            <p>Hello, my Child!</p>
           </Child> 
        );
    }
}

export default List;
