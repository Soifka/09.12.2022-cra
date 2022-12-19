import React from "react";

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:''
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {props: {sendDataToParent}, state: {userName}} = this;

        sendDataToParent(userName);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type="text" 
                placeholder="Type your name"
                name="userName"
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <button>Send name</button>
            </form>
        )
    }
}

export default HelloForm;