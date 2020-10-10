import firebase from 'firebase';
const messengerAPP = firebase.initializeApp({
  apiKey: "AIzaSyAFI_RftMmNuKBEtDs0pZ6oki16xEaWgBE",
  authDomain: "messenger-clone-3085d.firebaseapp.com",
  databaseURL: "https://messenger-clone-3085d.firebaseio.com",
  projectId: "messenger-clone-3085d",
  storageBucket: "messenger-clone-3085d.appspot.com",
  messagingSenderId: "922407850543",
  appId: "1:922407850543:web:d27e5b8ba8b4e302882cda",
  measurementId: "G-PX9PPZNR22"
})

const db = messengerAPP.firestore();
export default db;
