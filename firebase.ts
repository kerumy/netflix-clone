// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAPfnpAZYDcgGH6bA806sC5sSzTEaRsq7k',
    authDomain: 'netflix-clone-a7273.firebaseapp.com',
    projectId: 'netflix-clone-a7273',
    storageBucket: 'netflix-clone-a7273.appspot.com',
    messagingSenderId: '239291251181',
    appId: '1:239291251181:web:e6bdd92543b891cb168fe4',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
