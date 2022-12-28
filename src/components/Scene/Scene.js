import React, { useState } from "react";
import Toggler from "./Toggler";
import "./style.css";


const Scene = () => {
    const [state, setState] = useState(true);

    const toggleScene = () => {
        setState(!state);
    }
    
    return (
        <div className={state ? "scene-on" : "scene-off"}>
            <Toggler buttonText={state ? 'On' : 'Off'} changeParentState={() => {toggleScene()}} />
        </div>
    );
}

export default Scene;


/*
class Scene extends React.Component {
    //textStr = 'text from Scene component';

    constructor(props) {
        super(props);
        this.state = {
            light: true
        }
    }

    // consoleThis(str) {
    //     console.log('My child clicked ' + str);
    // }

    toggleScene() {
        this.setState({
            light: !this.state.light
        })
    }

    render() {
        const { light } = this.state;
        return (
            <div className={light ? "scene-on" : "scene-off"}>
                <Toggler buttonText={light ? 'On' : 'Off'} changeParentState={() => {this.toggleScene()}} />
            </div>
        )
    }
}


export default Scene;
*/

/*
Parent --> Child --- props
Child --> Parent --- callback
Child --> Child (Siblings) --- parent
*/