//Custom button

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { txtFont } from "../assets/Styles"
import { SvgXml } from 'react-native-svg';

const CustomBtn = (Props) => {

    return (
        <TouchableOpacity
            disabled={Props.disableClick}
            onPress={Props.btnOnPress}
            style={{
                paddingHorizontal: responsiveWidth(2),
                paddingVertical: responsiveHeight(1.2),
                width: Props.width,
                alignItems: 'center',
                borderRadius: responsiveWidth(1),
                backgroundColor: Props.disableClick ? Props.disableBackColor : Props.btnBackColor,
                marginTop: responsiveHeight(Props.btnMargin[0]),
                marginBottom: responsiveHeight(Props.btnMargin[1]),
                marginRight: responsiveWidth(Props.btnMargin[2]),
                marginLeft: responsiveWidth(Props.btnMargin[3]),
                flexDirection: 'row',
                justifyContent: 'center'
            }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                    color: Props.btnTitleColor,
                    ...txtFont.smallBlackFont
                }}>{Props.btnTitle}</Text>
                {Props.hasIcon && <SvgXml xml={Props.iconName}
                    width={responsiveWidth(4.5)}
                    height={responsiveWidth(4.5)}
                    marginLeft={responsiveWidth(2)}
                />}
            </View>

        </TouchableOpacity>
    );

};

export default CustomBtn;
