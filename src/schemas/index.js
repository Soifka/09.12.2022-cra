import * as yup from 'yup';

export const SCHEMA = yup.object({
    name: yup.string().min(1).max(20),
    surname: yup.string().min(3).max(30),
    email: yup.string().required().email(),
    pass: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})