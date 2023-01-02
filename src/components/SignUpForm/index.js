import React, { Component } from 'react';
import styles from './style.module.scss'
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field } from 'formik';

// isValid (работает асинхронно, возвращает promise)
// isValidSync (работает синхронно, возвращает true/false)
// validateSync (работает синхронно, выдает ссобщение, в чем ошибка)

const initialState = {
    name: '',
    surname: '',
    email: '',
    pass: ''
}

const SignUpForm = (props) => {
    const handleSubmitToFormik = (values, actions) => {
        actions.resetForm();
    }
    
    return (
        <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
            {
                (formikProps) => {
                    return (
                        <Form>
                            <Field name='name' placeholder='Your name' />
                            <Field name='surname' placeholder='Your surname' />
                            <Field name='email' placeholder='Your email' />
                            <Field name='pass' placeholder='Your password' />
                            <input type='submit' value='submit' />
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default SignUpForm;
