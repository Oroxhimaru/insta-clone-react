import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyBm0pXscf8O0Q717h6hTQprKsD4alQA23c",
    authDomain: "insta-clone-react-4cce7.firebaseapp.com",
    projectId: "insta-clone-react-4cce7",
    storageBucket: "insta-clone-react-4cce7.appspot.com",
    messagingSenderId: "585836213615",
    appId: "1:585836213615:web:ea8f0293e6668557fd649a",
    measurementId: "G-YTWKX26ECW"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

  export { db, auth, storage };