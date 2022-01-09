import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyD4XeyqQ2KpKKeHegPPt_A_DbPJFLWOGEY",
  authDomain: "clothing-shop-db-8601d.firebaseapp.com",
  projectId: "clothing-shop-db-8601d",
  storageBucket: "clothing-shop-db-8601d.appspot.com",
  messagingSenderId: "415447823501",
  appId: "1:415447823501:web:cfb8af1f9489601f545ec4",
  measurementId: "G-HWC9KQEXZ7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;