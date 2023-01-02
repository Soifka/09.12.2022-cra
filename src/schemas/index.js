import * as yup from 'yup';

export const SCHEMA = yup.object({
    name: yup.string().min(1).max(20),
    surname: yup.string().min(3).max(30),
    email: yup.string().required('Email required!!!').email(`Email isn't valid`),
    pass: yup.string().required('Password required!!!').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password is not valid!')
})