import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sayHello: true
        };
    }

    sayBye() {
        this.setState({
            sayHello: !this.state.sayHello
        })
    }

    render() {
        const whatSay = this.state.sayHello ? 'Hello' : 'Bye'; 

        return <h1 onClick={() => {this.sayBye()}} >{whatSay}, {this.props.name} from {this.props.country}!</h1>
    }
}

export default Greeting;

/*
Homework with Greeting
Доробити компоненту Greetings таким чином, щоб за натиснення на елемент, текст "Hello ...." змінювався на "Bye!"
Підказка. Працюйте зі стейтом.
*/