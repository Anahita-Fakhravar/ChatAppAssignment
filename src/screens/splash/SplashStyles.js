//Splash screen's styles 

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../assets/Colors';
import { txtFont } from '../../assets/Styles';

export const SplashStyles = {

    container: { backgroundColor: Colors.darkTheme, flex: 1, alignItems: 'center' },
    appNameTxt: {
        ...txtFont.extraLarge,
        color: Colors.mediumTheme, marginTop: responsiveHeight(16)
    },
    descContainer: { flexDirection: 'row', alignItems: 'center' },
    appDescTxt: {
        ...txtFont.largeBoldFont,
        color: Colors.txtOnDarkTheme,
        textAlign: 'center',
        marginRight: responsiveWidth(5)
    },
    programmerTxt: {
        ...txtFont.mediumBoldFont,
        color: Colors.txtOnDarkTheme,
        textAlign: 'center',
        marginTop: responsiveHeight(40)
    },

}