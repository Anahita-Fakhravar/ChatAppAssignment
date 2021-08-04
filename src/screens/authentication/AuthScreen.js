//Auth screen design 

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, } from 'react-native';
import { Formik } from 'formik'
import { authValidationSchema } from '../../functions/Validations';
import { Strings } from './../../assets/Strings';
import { CustomBtn } from './../../components/CustomBtn';
import { AuthStyles } from './AuthStyles';
import { useDispatch, useSelector } from 'react-redux';
import { authStatus } from '../../redux/reducers/authReducer';
import firebase from '../../firebase/config';

const AuthScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const authData = useSelector(state => state.authReducer)

    console.log('test saga ana 1000', authData)

    const _register = async (email, password) => {
        console.log('Anahita', email, password);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {

                console.warn("User ID :- ", data.user.uid);
                // navigation.navigate('ChatScreen')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Anahita That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {

                    Alert.alert('Anahita That email address is invalid!')
                }

                if (error.code === 'auth/network-request-failed') {

                    Alert.alert('Network problem!')
                }
                console.warn('anahita error', error.code)
            });

    }

    return (

        <View style={AuthStyles.container}>

            <Formik
                validationSchema={authValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => _register(values.email, values.password)}
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
                        //  isLoading={loading}
                        />
                    </>
                )}
            </Formik>

        </View >
    )
}
export default AuthScreen
