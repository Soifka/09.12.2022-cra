import React, { Component } from 'react';
import styles from './style.module.scss'
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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
        <Formik 
        initialValues={initialState} 
        onSubmit={handleSubmitToFormik}
        validationSchema={SCHEMA}
        >
            {
                (formikProps) => {
                    return (
                        <Form className={styles.formStyle}>
                            <Field name='name' placeholder='Your name' />
                            <ErrorMessage name='name' component="p" />
                            <Field name='surname' placeholder='Your surname' />
                            <ErrorMessage name='surname' component="p" />
                            <Field name='email' placeholder='Your email' />
                            <ErrorMessage name='email' component="p" />
                            <Field name='pass' placeholder='Your password' />
                            <ErrorMessage name='pass' component="p" />
                            <input type='submit' value='submit' />
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default SignUpForm;
