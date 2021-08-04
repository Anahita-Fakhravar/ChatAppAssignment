import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpFejivl5QGxUqnlBIeusp3NVDsw9E3LA",
  databaseURL: "https://chatappassignment-fac56-default-rtdb.firebaseio.com/",
  projectId: "chatappassignment-fac56",
  appId: "1:146767836932:android:27de1466646949e3ec8251",
};

export default Firebase.initializeApp(firebaseConfig);
