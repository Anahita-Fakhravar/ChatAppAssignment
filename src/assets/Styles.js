//Define global styles here

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import { Colors } from './Colors';

export const txtFont = {

    smallFont: {
        fontSize: responsiveFontSize(1.5)
    },
    mediumFont: {
        fontSize: responsiveFontSize(1.8)
    },
    largeFont: {
        fontSize: responsiveFontSize(2)
    },

    smallBoldFont: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold'
    },
    mediumBoldFont: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold'
    },
    largeBoldFont: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    extraLarge:{
        fontSize: responsiveFontSize(10),
        fontWeight: 'bold'
    }

}

export const globalStyles = {
    globalContainer: {
        flex: 1,
        backgroundColor: Colors.lightBackGround,
    },
    globalTextInput: {
        paddingVertical: responsiveHeight(1.8),
        paddingHorizontal: responsiveWidth(5),
        width: responsiveWidth(90),
        borderWidth: responsiveWidth(0.5),
        borderColor: Colors.mediumTheme,
        borderRadius: responsiveWidth(2),
        marginVertical: responsiveHeight(2),
        alignSelf: 'center',
        textAlign: 'right',
        ...txtFont.mediumThinFont,
        color: Colors.txtOnLightTheme,
    },
    globalTopTxt: {
        ...txtFont.smallThinFont,
        position: 'absolute',
        color: Colors.mediumTheme,
        paddingHorizontal: responsiveWidth(1.5),
        backgroundColor: Colors.lightBackGround,
        right: responsiveWidth(8),
        textAlign: 'right',
    },
    txtError: {
        ...txtFont.smallBlackFont,
        color: Colors.txtError,
        marginHorizontal: responsiveWidth(9)
    },
}