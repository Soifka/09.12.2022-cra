import React from "react";
import HelloForm from "./HelloForm";

class HelloParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }

    getStateFromChild = (data) => {
        this.setState({
            userName: data
        })
    }

    render() {
        const { userName } = this.state;
        
        return (
            <>
                <HelloForm sendDataToParent={this.getStateFromChild} />
                {userName ? <div>Hello, {userName}!</div> : <div>Enter your name in form!</div>}
            </>
            
        )
    }
}

export default HelloParent;