import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBm0pXscf8O0Q717h6hTQprKsD4alQA23c",
    authDomain: "insta-clone-react-4cce7.firebaseapp.com",
    projectId: "insta-clone-react-4cce7",
    storageBucket: "insta-clone-react-4cce7.appspot.com",
    messagingSenderId: "585836213615",
    appId: "1:585836213615:web:ea8f0293e6668557fd649a",
    measurementId: "G-YTWKX26ECW"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };