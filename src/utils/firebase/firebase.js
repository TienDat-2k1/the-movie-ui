import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHusih1t16ry-BWL1M-SEVsp6XMKNElDQ',
  authDomain: 'the-movie-ui.firebaseapp.com',
  projectId: 'the-movie-ui',
  storageBucket: 'the-movie-ui.appspot.com',
  messagingSenderId: '634263181332',
  appId: '1:634263181332:web:041fc08f89b002f162ef01',
  measurementId: 'G-RWHTNH6VJ5',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const createUser = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailAndPass = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const createDocFromAuth = async (user, inf = {}) => {
  if (!auth) return;
  const userDocRef = doc(db, 'user', user.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...inf,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
