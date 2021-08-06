import React, { useState, useEffect } from 'react'
import { View, FlatList, KeyboardAvoidingView } from 'react-native'
import DismissKeyboard from './../../components/DismissKeyboard';

import { Strings } from './../../assets/Strings';
import MessageItem from './../../components/MessageItem';
import MessageFieldView from './../../components/MessageFieldView';
import { useSelector } from 'react-redux';

import sendMessage from './../../firebase/sendMessage';
import getMessages from './../../firebase/getMessage';
import { ChatScreenStyles } from './ChatScreenStyles';


const ChatScreen = () => {

    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState('')
    const userData = useSelector(state => state.signUpReducer)

    useEffect(() => {
        getMessages(_setMessageList, _setMessage)
    }, [])

    function _setMessageList(messages) {
        setMessageList(messages)
    }

    function _setMessage(message) {
        setMessage(message)
    }

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={ChatScreenStyles.mainContainer}
                behavior="padding" enabled keyboardVerticalOffset={100}>
                <View style={ChatScreenStyles.container}>
                    <FlatList
                        style={ChatScreenStyles.flatList}
                        data={messageList}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) => {
                            return (
                                <MessageItem item={item} />
                            )
                        }}
                    />
                    <View style={ChatScreenStyles.messageFieldView}>
                        <MessageFieldView term={message}
                            placeHolder={Strings.typeYourMessage}
                            onTermChange={message => setMessage(message)}
                            onSubmit={() => sendMessage(message, userData.uid, _setMessage)}
                        >
                        </MessageFieldView>

                    </View>

                </View>

            </KeyboardAvoidingView>

        </DismissKeyboard>
    )
}


export default ChatScreen