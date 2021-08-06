
import firebase from './../firebase/config';
const firestore = firebase.firestore()

function getMessages(_setMessageList, _setMessage) {
    const db = firestore
    var messages = []
    db.collection("message").doc('J95Bpn0ZJlPBZo2SQOEPuCXkwJ13').collection("messages")
        .onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    console.log("New Message: ", change.doc.data())
                    messages.push(change.doc.data())
                    _setMessage('')
                }
                _setMessageList(messages)


            })
        })
}

export default getMessages