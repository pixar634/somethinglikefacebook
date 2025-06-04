import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC_IdB2Z6lktlUFI8hDyT930xRE-bb2r6A",
    authDomain: "fb-2-clone-9cea8.firebaseapp.com",
    projectId: "fb-2-clone-9cea8",
    storageBucket: "fb-2-clone-9cea8.appspot.com",
    messagingSenderId: "95384075556",
    appId: "1:95384075556:web:235c487979de37c43a07b1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
