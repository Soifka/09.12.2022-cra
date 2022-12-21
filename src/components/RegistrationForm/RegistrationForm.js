import React, { Component } from 'react';
import styles from './style.module.scss';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                surname: '',
                age: '',
                email: ''
            }
        }
    }
    
    
    render() {
        return (
            <div>
                <form className={styles['reg-form']}>
                    <input type='text' placeholder='Your name' />
                    <input type='text' placeholder='Your surname' />
                    <input type='text' placeholder='Your age' />
                    <input type='text' placeholder='Your email' />
                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
