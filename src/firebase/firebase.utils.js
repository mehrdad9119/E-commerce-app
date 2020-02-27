import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEAZrXmd2qO7zy_tqLEG0VNBIeHEJkudE",
    authDomain: "ecommerceapp-473e9.firebaseapp.com",
    databaseURL: "https://ecommerceapp-473e9.firebaseio.com",
    projectId: "ecommerceapp-473e9",
    storageBucket: "ecommerceapp-473e9.appspot.com",
    messagingSenderId: "664930708108",
    appId: "1:664930708108:web:20dd5b7d892eb2b8d6e9a9",
    measurementId: "G-PW0TERMMJ8"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message)
      };
    };

    return userRef;
  };


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;