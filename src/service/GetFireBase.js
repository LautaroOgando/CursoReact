import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_wBra3VIBwjv709rhC5_fxtQXOICgOJE",
    authDomain: "primer-proyecto-f4baa.firebaseapp.com",
    projectId: "primer-proyecto-f4baa",
    storageBucket: "primer-proyecto-f4baa.appspot.com",
    messagingSenderId: "469598905648",
    appId: "1:469598905648:web:7c7d8da7752eadcf1914f5"
  };
const app = firebase.initializeApp(firebaseConfig)


export function getFirestore()
{
    return firebase.firestore(app)
}