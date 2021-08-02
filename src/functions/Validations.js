//These functions are for validations in the project 

import * as yup from 'yup';
import { Strings } from './../assets/Strings';

export const authValidationSchema = yup.object().shape({

    email: yup
        .string()
        .email(Strings.wrongEmail)
        .required(Strings.emptyEmail),
    password: yup
        .string()
        .min(6)
        .required(Strings.emptyPassword),
})

