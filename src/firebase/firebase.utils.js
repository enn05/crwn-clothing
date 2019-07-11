import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDid5-R8M7JqClQwxuRJoA-ve3UZ1TPRk4",
    authDomain: "crwn-db-c69dd.firebaseapp.com",
    databaseURL: "https://crwn-db-c69dd.firebaseio.com",
    projectId: "crwn-db-c69dd",
    storageBucket: "",
    messagingSenderId: "788821200752",
    appId: "1:788821200752:web:eec23ee510c35673"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData  
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;