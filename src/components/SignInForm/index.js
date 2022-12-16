import React from 'react';
import './style.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault();
    }

    changeEmailHandler = ({target: {value}}) => {
        this.setState({
            email: value
        })
    }

    changePassHandler = ({target: {value}}) => {
        this.setState({
            password: value
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <form className="form-wrapper flex-column" onSubmit={this.submitHandler}>
                <label className='flex-column'>
                    Your email:
                    <input onChange={this.changeEmailHandler} name='email' type='text' placeholder='test@gmail.com' value={email} />
                </label>

                <label className='flex-column'>
                    Your password:
                    <input onChange={this.changePassHandler} name='password' type='password' value={password} />
                </label>

                <button type='submit'>Submit form</button>
            </form>
        )
    }
}

export default SignInForm;