//Authentication styles
import React, { useRef } from 'react';
import { Strings } from './../../assets/Strings';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from './../../assets/Colors';
import { txtFont } from '../../assets/Styles';

export const AuthStyles = {

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    errorTxt: {
        ...txtFont.smallBoldFont,
        color: Colors.mediumTheme,
        marginLeft: responsiveWidth(8)
    },
    labelTxt: {
        ...txtFont.mediumBoldFont,
        color: Colors.darkTheme,
        marginLeft: responsiveWidth(8),
        marginTop:responsiveHeight(2)
    },
    txtInput: {
        paddingVertical: responsiveHeight(1.2),
        width: responsiveWidth(86),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(1),
        backgroundColor: 'white',
        borderColor: Colors.mediumTheme,
        borderWidth: responsiveWidth(0.2),
        borderRadius: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(2),
        alignSelf: 'center',
    },
    emailTxtInput: {
        placeholder: Strings.email,
        ref: input => useRef.email = input,
        returnKeyType: 'next',
        name: "email",
        keyboardType: "email-address",
        secureTextEntry: false,
        autoCorrect: false,
    },
    passwordTxtInput: {
        placeholder: Strings.password,
        ref: input => useRef.password = input,
        returnKeyType: 'done',
        name: "password",
        secureTextEntry: true,
        autoCorrect: false,
    },
    confirmBtn: {
        btnTitle: Strings.confirm,
        width: responsiveWidth(24),
        btnBackColor: Colors.mediumTheme,
        btnTitleColor: Colors.txtOnDarkTheme,
        btnMargin: [4, 4, 0, 0],
        disableClick: false,
        disableBackColor: Colors.lightTheme,
        hasIcon: false,
    },
}