//Auth screen design 

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, } from 'react-native';
import { Formik } from 'formik'

import { authValidationSchema } from '../../functions/Validations';
import { ScreensName } from '../../ScreensName';
import { Strings } from './../../assets/Strings';
import { CustomBtn } from './../../components/CustomBtn';
import { AuthStyles } from './AuthStyles';

const AuthScreen = () => {

    function _register(value) {

        console.log('register data', value)
    }

    return (

        <View style={AuthStyles.container}>

            <Formik
                validationSchema={authValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => _register(values)}
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

        </View>
    )
}
export default AuthScreen
