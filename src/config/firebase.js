import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCLdZmi7eiWcYdcbuVWtxgy8QVAahhyXlU",
  authDomain: "clonetiktok-58b44.firebaseapp.com",
  projectId: "clonetiktok-58b44",
  storageBucket: "clonetiktok-58b44.appspot.com",
  messagingSenderId: "982750525073",
  appId: "1:982750525073:web:5d8c6a732cfc2f82fbf130"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;