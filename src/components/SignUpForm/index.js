import React, { Component } from 'react';
import styles from './style.module.scss'
import { SCHEMA } from '../../schemas';

// isValid (работает асинхронно, возвращает promise)
// isValidSync (работает синхронно, возвращает true/false)
// validateSync (работает синхронно, выдает ссобщение, в чем ошибка)

const initialState = {
    name: '',
    surname: '',
    email: '',
    pass: ''
}

class SignUpForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        ...initialState,
        isError: null
    }
}

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        try {
            SCHEMA.validateSync(this.state);
        } catch (error) {
            this.setState({
                isError: error
            })
        }
    }

    render() {
        const { name, surname, email, pass, isError } = this.state;

        return (
            <form className={styles.formStyle} onSubmit={this.submitHandler}>
                <input type='text' placeholder='Enter your name' name='name' value={name} onChange={this.changeHandler} />
                <input type='text' placeholder='Enter your surname' name='surname' value={surname} onChange={this.changeHandler} />
                <input type="text" placeholder='Your email' name='email' value={email} onChange={this.changeHandler}/>
                <input type="text" placeholder='Your password' name='pass' value={pass} onChange={this.changeHandler}/>
                <button type='submit'>Submit</button>
                {isError && <p className={styles.errorMessage}>{isError.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;
