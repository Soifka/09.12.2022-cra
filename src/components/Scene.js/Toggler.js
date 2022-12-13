import React from "react";

class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: true
        }
    }

    handleClick() {
        this.setState({
            on: !this.state.on
        })
        this.props.changeParentState();
    }

    render() {
        console.log(this.props);
        //console.log(this.props.textStr); // через props родительский элемент может передать информацию дочернему элементу

        const isOn = this.state.on ? 'On' : 'Off';

        return (
            <>
                <button onClick={() => {this.handleClick()}}>{isOn}</button>
                <p>I know You see me now!</p>
            </>
            
        )
    }
}

export default Toggler;