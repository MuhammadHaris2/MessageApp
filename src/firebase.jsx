import firebase from 'firebase';
const messengerAPP = firebase.initializeApp({
  apiKey: "AIzaSyCaXAIZgKQx7jvF9gd2D5hrEJo_WIKTRXM",
  authDomain: "messenger-apps-8c597.firebaseapp.com",
  databaseURL: "https://messenger-apps-8c597.firebaseio.com",
  projectId: "messenger-apps-8c597",
  storageBucket: "messenger-apps-8c597.appspot.com",
  messagingSenderId: "968170030969",
  appId: "1:968170030969:web:011add32d89b187960d1a8",
  measurementId: "G-C8QW9JPN1R"
})

const db = messengerAPP.firestore();
export default db;