import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfBxDcpQLA07EB007sXs4kNV4NlIv0SnQ",
  authDomain: "teacher-117c8.firebaseapp.com",
  projectId: "teacher-117c8",
  storageBucket: "teacher-117c8.appspot.com",
  messagingSenderId: "1027179677484",
  appId: "1:1027179677484:web:9fcb7e73df809591fbce89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
