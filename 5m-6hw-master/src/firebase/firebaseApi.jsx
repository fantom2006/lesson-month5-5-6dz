import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBKT2LHpVDZ2Zm5I9Xg_XVsznetZxGzdQ",
  authDomain: "fir-7a6ef.firebaseapp.com",
  projectId: "fir-7a6ef",
  storageBucket: "fir-7a6ef.appspot.com",
  messagingSenderId: "123216830394",
  appId: "1:123216830394:web:5a65a73885943caba78783"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app); 

export { app, auth, provider, db };
export default app;
