import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr7e_nQ7F0WtGWFEOLQ7Ht7wmfE77RYUI",
  authDomain: "slack-clone-73c2d.firebaseapp.com",
  projectId: "slack-clone-73c2d",
  storageBucket: "slack-clone-73c2d.appspot.com",
  messagingSenderId: "370270048394",
  appId: "1:370270048394:web:b533c8355bfbdc3a049d73",
  measurementId: "G-V3QHT1D419"
};

//Initialize the firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Get Access to the firebase Store
const db = firebaseApp.firestore() ;

//Authenticate firebase
const auth = firebase.auth();

//Provider for google authentication
const provider = new firebase.auth.GoogleAuthProvider() ;

//export the database
export default db ;

//export the authenticator and google authentication provider
export {auth,provider};