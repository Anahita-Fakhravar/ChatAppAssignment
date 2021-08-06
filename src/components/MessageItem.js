import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from './../assets/Colors';
import firebase from '../firebase/config';


function MessageItem({ item }) {
    const userID = firebase.auth().currentUser.uid

    function messageView() {
        if (userID === item.senderId) {
            return (
                <View style={styles.othersMessageContainerView}>
                    <Text style={[styles.senderName, { textAlign: 'right' }]} >{item.senderEmail}</Text>
                    <Text style={[styles.message, { textAlign: 'right' }]}>{item.message}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.myMessageContainerView}>
                    <Text style={styles.senderName}> {item.senderEmail}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            )
        }
    }

    return(
        messageView()
    )
}

const styles = StyleSheet.create({
    othersMessageContainerView: {
        width:responsiveWidth(95),
        backgroundColor: Colors.darkTheme,
        borderRadius: responsiveWidth(1),
        marginLeft: responsiveWidth(3),
        marginVertical:responsiveHeight(1),
        padding: responsiveWidth(2),
    },
    myMessageContainerView: {
        width:responsiveWidth(95),
        backgroundColor: Colors.mediumTheme,
        borderRadius: responsiveWidth(1),
        margin: responsiveWidth(3),
        padding: responsiveWidth(2)
    },
    senderName: {
        color: Colors.txtOnDarkTheme,
        fontSize: 14,
        fontWeight: 'bold'
    },

    message: {
        color: Colors.txtOnDarkTheme,
        fontSize: responsiveFontSize(1.5)
    }
})


export default MessageItem