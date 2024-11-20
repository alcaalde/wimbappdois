import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCoIJ7hLlvtS0Vf-UbVxT3H2IhGAdHCqfA",
    authDomain: "wimback-ac0a9.firebaseapp.com",
    databaseURL: "https://wimback-ac0a9-default-rtdb.firebaseio.com",
    projectId: "wimback-ac0a9",
    storageBucket: "wimback-ac0a9.firebasestorage.app",
    messagingSenderId: "208592152847",
    appId: "1:208592152847:web:1493855c818ae1c5f6f67a",
    measurementId: "G-MHBKWY206F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
