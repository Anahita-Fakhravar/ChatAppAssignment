//Chat screen design 

import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = () => {

  const [recvMessages, setRecvMessages] = useState([])

  return (
    <GiftedChat
      renderUsernameOnMessage
      messages={recvMessages}
      onSend={messages => console.log('d')}
      user={{
        _id: 1,
      }}
    />
  )
}

export default ChatScreen