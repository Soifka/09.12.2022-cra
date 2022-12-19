import React, { Component } from 'react';
import styles from './ToDoFormStyle.module.css';
import cx from 'classnames';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // необходимо поле, куда придет value из инпута
            todo: '',
            isInputValid: true
        }
    }

    // onChange обработчик --> передача значения инпута в стейт
    changeHandler = ({target: {value, name}}) => {
        if(value.includes('*')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                [name]: value,
                isInputValid: true
            })
        }
        
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.todo);
    }
    
    render() {
        const { todo, isInputValid } = this.state;

        const cNameString = cx({
            [styles.input]: true,
            [styles['invalid-input']]: !isInputValid
        })

        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                {/* 1. Должен быть инпут
                    2. input.value должно приходить к нам из стейта
                */}
                <input 
                type="text" 
                name="todo"
                value={todo}
                onChange={this.changeHandler}
                className={cNameString}
                />
                <button type="submit">Add task</button>
            </form>
        );
    }
}

export default ToDoForm;