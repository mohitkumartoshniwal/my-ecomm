import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCkA78J7LSi82Tg2kIKyuIAoGxgiGwjLTI",
    authDomain: "crwn-db-2f635.firebaseapp.com",
    databaseURL: "https://crwn-db-2f635.firebaseio.com",
    projectId: "crwn-db-2f635",
    storageBucket: "crwn-db-2f635.appspot.com",
    messagingSenderId: "634830817766",
    appId: "1:634830817766:web:965b812d6920fb421dee27"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;