import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBiRc_C7cDDAovo9Fb0d7D928MoPPJuVBQ",
  authDomain: "e-commerce-dni.firebaseapp.com",
  databaseURL: "https://e-commerce-dni.firebaseio.com",
  projectId: "e-commerce-dni",
  storageBucket: "e-commerce-dni.appspot.com",
  messagingSenderId: "1005955994327",
  appId: "1:1005955994327:web:b3656cbae439ff3b"
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
      console.error(`error occured while creating ${error.message}`);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
