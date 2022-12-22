import React, { Component } from 'react';
import styles from './style.module.scss';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            age: '',
            email: ''
        }
    }
    
    sendUserInfo = (event) => {
        event.preventDefault();
        const { name, surname, age, email } = this.state;

        this.props.getUsersInfo(name, surname, age, email);
    }

    changeHandler = ({target, target: {name, value}}) => {
        console.dir(target)
        console.log(name, value)

        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, surname, age, email } = this.state;
        
        return (
            <div>
                <form className={styles['reg-form']} onSubmit={this.sendUserInfo}>
                    <input type='text' placeholder='Your name' name='name' value={name} onChange={this.changeHandler} />
                    <input type='text' placeholder='Your surname' name='surname' value={surname} onChange={this.changeHandler} />
                    <input type='text' placeholder='Your age' name='age' value={age} onChange={this.changeHandler} />
                    <input type='text' placeholder='Your email' name='email' value={email} onChange={this.changeHandler} />
                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
