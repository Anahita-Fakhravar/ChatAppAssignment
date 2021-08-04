//Auth screen design 

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, } from 'react-native';
import { Formik } from 'formik'
import { authValidationSchema } from '../../functions/Validations';
import { Strings } from './../../assets/Strings';
import { CustomBtn } from './../../components/CustomBtn';
import { AuthStyles } from './AuthStyles';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/reducers/authReducer';
//import firebase from '../../firebase/config';

const AuthScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const signUpData = useSelector(state => state.authReducer)

    console.warn('test saga ana 1000', signUpData)

    useEffect(() => {
        signUpData.status === 'success' && navigation.navigate('ChatScreen')
        signUpData.status === 'fail' && Alert.alert(signUpData.message)

    }, [signUpData.status])

    return (

        <View style={AuthStyles.container}>

            <Formik
                validationSchema={authValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => dispatch(signUp({ email: values.email, password: values.password }))}
            // onSubmit={values => navigation.navigate('ChatScreen')}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors,
                    touched }) => (
                    <>
                        <Text style={AuthStyles.labelTxt}>{Strings.email}:</Text>

                        <TextInput
                            {...AuthStyles.emailTxtInput}
                            onSubmitEditing={() => useRef.password.focus()}
                            style={AuthStyles.txtInput}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />

                        {(errors.email && touched.email) && <Text style={AuthStyles.errorTxt}>{errors.email}</Text>}

                        <Text style={AuthStyles.labelTxt}>{Strings.password}:</Text>

                        <TextInput
                            {...AuthStyles.passwordTxtInput}
                            style={AuthStyles.txtInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            onSubmitEditing={handleSubmit}
                        />

                        {(errors.password && touched.password) && <Text style={AuthStyles.errorTxt}>{errors.password}</Text>}

                        <CustomBtn
                            btnOnPress={handleSubmit}
                            {...AuthStyles.confirmBtn}
                            isLoading={signUpData.loading}
                        />
                    </>
                )}
            </Formik>

        </View >
    )
}
export default AuthScreen
