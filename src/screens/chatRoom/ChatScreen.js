//Chat screen design 

import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Firebase from './../../firebase/config';

const ChatScreen = () => {

  const [userList, setUserList] = useState([])
/* 
  async function _getUserList() {
    console.warn('userList 1', userList)
    try {
      await Firebase.database().ref()
        .on('value', (datasnapshot) => {
          console.warn('userList', datasnapshot)
          let users = [];
          datasnapshot.forEach((child) => {
            users.push({
              userName: child.val().name,
              uuid: child.val().uuid
            });

          });
          setUserList(users)
        })
    } catch (error) {
      console.warn('error ana', error)
    }
  } */


  useEffect(() => {

    _getUserList()

  }, [])

  return (
    <GiftedChat
      renderUsernameOnMessage
      messages={[]}
      onSend={messages => console.log('d')}
      user={{
        _id: 1,
      }}
    />
  )
}

export default ChatScreen