import firebase from './../firebase/config';
const firestore = firebase.firestore()

function sendMessage(message,userUid,_setMessage) {
    const messageRef = firestore.collection("message").doc('J95Bpn0ZJlPBZo2SQOEPuCXkwJ13').collection("messages").doc()
    const userEmail = firebase.auth().currentUser.email
    messageRef.set({
        messageID: messageRef.id,
        message: message,
        senderId: userUid,
        senderEmail: userEmail
    }).then(function (docRef) {
        console.log("Document written with ID: ", messageRef.id)
        _setMessage('')
    }).catch(function (error) {
        Alert.alert(error.message)
        console.log("Error:", error)
    })

}

export default sendMessage