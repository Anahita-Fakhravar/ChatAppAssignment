//Splash screen design 

import React from 'react';
import { View, Text } from 'react-native';
import { responsiveWidth, } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';

import { Strings } from '../../assets/Strings';
import { emoji } from '../../assets/images/XmlFile';
import { SplashStyles } from './SplashStyles';

const SplashScreen = () => {

    return (
        <View style={SplashStyles.container}>

            <Text style={SplashStyles.appNameTxt}>{Strings.appName}</Text>

            <View style={SplashStyles.descContainer}>

                <Text style={SplashStyles.appDescTxt}>{`${Strings.description}`}</Text>

                <SvgXml xml={emoji}
                    width={responsiveWidth(7)}
                    height={responsiveWidth(7)}
                />
            </View>

            <Text style={SplashStyles.programmerTxt}>{`${Strings.programmer}:  \n\n ${Strings.programmerName}`}</Text>

        </View>
    )

}
export default SplashScreen