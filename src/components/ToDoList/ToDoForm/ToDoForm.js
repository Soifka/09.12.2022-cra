import React, { Component } from 'react';
import styles from './ToDoFormStyle.module.css';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // необходимо поле, куда придет value из инпута
            todo: ''
        }
    }

    // onChange обработчик --> передача значения инпута в стейт
    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendData(this.state.todo);
    }
    
    render() {
        const { todo } = this.state
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
                />
                <button type="submit">Add task</button>
            </form>
        );
    }
}

export default ToDoForm;
