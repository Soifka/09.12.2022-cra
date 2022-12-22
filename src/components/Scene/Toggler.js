import React from "react";

// Функциональный компонент
function Toggler(props) {
    
    const handleClick = () => {
        props.changeParentState();
    }

    return (
        <button onClick={() => {handleClick()}}>{props.buttonText}</button>
    )
}



/* Классовый компонент
class Toggler extends React.Component {
    handleClick() {
        this.props.changeParentState();
    }

    render() {
        return (
            <>
                <button onClick={() => {this.handleClick()}}>{this.props.buttonText}</button>
            </>
            
        )
    }
}
*/


export default Toggler;