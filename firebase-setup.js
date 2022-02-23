import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8lL0AMJuhQEzIdRP3LaUNGQew-x42s-g",
  authDomain: "fuapp-cef59.firebaseapp.com",
  projectId: "fuapp-cef59",
  storageBucket: "fuapp-cef59.appspot.com",
  messagingSenderId: "665387711724",
  appId: "1:665387711724:web:5fb67bc68476ede30b39c9",
  measurementId: "G-VF4ZTYC8HT"
}
if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export default () => {
    return {firebase,auth};
}