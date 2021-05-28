import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbesY1GXW3MTrdI3EXpD3o-Rwzaw5PRqo",
  authDomain: "linked-in-clone-37e9b.firebaseapp.com",
  projectId: "linked-in-clone-37e9b",
  storageBucket: "linked-in-clone-37e9b.appspot.com",
  messagingSenderId: "144934737814",
  appId: "1:144934737814:web:349d92d87b0cef33162fb7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
