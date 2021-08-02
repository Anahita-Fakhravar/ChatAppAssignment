//Auth screen design 

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, } from 'react-native';
import { Formik } from 'formik'
import { authValidationSchema } from '../../functions/Validations';
import { Strings } from './../../assets/Strings';
import { CustomBtn } from './../../components/CustomBtn';
import { AuthStyles } from './AuthStyles';

const AuthScreen = ({ navigation }) => {


    /*   const _register = async (values) => {
          console.warn('Anahita', values.email,values.password);
           auth().createUserWithEmailAndPassword(values.email,values.password)
              .then(() => {
                  console.warn('Anahita User account created & signed in!');
              })
              .catch(error => {
                  if (error.code === 'auth/email-already-in-use') {
                      console.warn('Anahita That email address is already in use!');
                  }
  
                  if (error.code === 'auth/invalid-email') {
                      console.warn('Anahita That email address is invalid!');
                  }
  
                  console.warn('Anahita Error');
              });
  
      } */

    return (

        <View style={AuthStyles.container}>

            <Formik
                validationSchema={authValidationSchema}
                initialValues={{ email: '', password: '' }}
                //   onSubmit={values => _register(values)}
                onSubmit={values => navigation.navigate('ChatScreen')}
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
