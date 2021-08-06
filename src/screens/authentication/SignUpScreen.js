//Auth screen design 

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, } from 'react-native';
import { Formik } from 'formik'
import { authValidationSchema } from '../../functions/Validations';
import { Strings } from '../../assets/Strings';
import { CustomBtn } from '../../components/CustomBtn';
import { SignUpStyles } from './SignUpStyles';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/reducers/signUpReducer';
//import firebase from '../../firebase/config';

const SignUpScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const signUpData = useSelector(state => state.signUpReducer)

    console.warn('test saga ana 1000', signUpData)

    useEffect(() => {
        signUpData.status === 'success' && navigation.navigate('ChatScreen')
        signUpData.status === 'fail' && Alert.alert(signUpData.message)

    }, [signUpData.status])

    return (

        <View style={SignUpStyles.container}>

            <Formik
                validationSchema={authValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => dispatch(signUp({ email: values.email, password: values.password }))}
            // onSubmit={values => navigation.navigate('ChatScreen')}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors,
                    touched }) => (
                    <>
                        <Text style={SignUpStyles.labelTxt}>{Strings.email}:</Text>

                        <TextInput
                            {...SignUpStyles.emailTxtInput}
                            onSubmitEditing={() => useRef.password.focus()}
                            style={SignUpStyles.txtInput}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />

                        {(errors.email && touched.email) && <Text style={SignUpStyles.errorTxt}>{errors.email}</Text>}

                        <Text style={SignUpStyles.labelTxt}>{Strings.password}:</Text>

                        <TextInput
                            {...SignUpStyles.passwordTxtInput}
                            style={SignUpStyles.txtInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            onSubmitEditing={handleSubmit}
                        />

                        {(errors.password && touched.password) && <Text style={SignUpStyles.errorTxt}>{errors.password}</Text>}

                        <CustomBtn
                            btnOnPress={handleSubmit}
                            {...SignUpStyles.confirmBtn}
                            isLoading={signUpData.loading}
                        />
                    </>
                )}
            </Formik>

        </View >
    )
}
export default SignUpScreen
