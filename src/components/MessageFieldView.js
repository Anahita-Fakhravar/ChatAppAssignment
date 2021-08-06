import React from 'react'
import { TextInput, Text, StyleSheet, View, Button } from 'react-native'
import { Colors } from './../assets/Colors';
import { Strings } from './../assets/Strings';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';


const MessageFieldView = ({ term, placeHolder, onTermChange, onValidateTextField, error, onSubmit, isJoined }) => {
    return (
        <View style={styles.containerView}>
            <View style={styles.fieldView}>
                <TextInput
                    autoCorrect={false}
                    style={styles.textField}
                    placeholder={placeHolder}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onValidateTextField}
                />
                <Button title = {Strings.send} color = {Colors.darkTheme} onPress = {onSubmit}/>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    containerView: {
        backgroundColor:Colors.txtOnDarkTheme,
        width: responsiveWidth(100),
        flex: 1,
        justifyContent: 'space-between',
    },
    fieldView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:Colors.darkTheme

    },
    textField: {
        fontSize: responsiveFontSize(1.5),
        flex: 1,
        marginRight: responsiveWidth(3),
        paddingLeft:  responsiveWidth(3),
        width: responsiveWidth(75),
        borderColor: Colors.lightTheme,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: Colors.txtOnDarkTheme
    },
    Button: {
        flex: 1,
        alignSelf: 'center',
        width: responsiveWidth(25),
        height: '100%'
    }
})

export default MessageFieldView
