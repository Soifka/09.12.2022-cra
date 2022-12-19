import React from 'react';
import './style.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isEmailValid: true,
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        if(!this.state.email.includes('@')) {
            this.setState({
                isEmailValid: false
            })
        }
    }
    
    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const { email, password, isEmailValid } = this.state;
        return (
            <form className="form-wrapper flex-column" onSubmit={this.submitHandler}>
                <label className='flex-column'>
                    Your email:
                    <input className={isEmailValid ? '' : 'invalid'} onChange={this.universalChangeHandler} name='email' type='text' placeholder='test@gmail.com' value={email} />
                </label>

                <label className='flex-column'>
                    Your password:
                    <input onChange={this.universalChangeHandler} name='password' type='password' value={password} />
                </label>

                <button type='submit'>Submit form</button>
            </form>
        )
    }
}

export default SignInForm;