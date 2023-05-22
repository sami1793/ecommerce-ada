// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase-auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCKQ0HQ9731l87kQ7o1HZtL0o3skQtLUTI',
  authDomain: 'ecommerce-ada.firebaseapp.com',
  projectId: 'ecommerce-ada',
  storageBucket: 'ecommerce-ada.appspot.com',
  messagingSenderId: '383802588844',
  appId: '1:383802588844:web:504fb474a424f20317a909',
  measurementId: 'G-TFE9NBC7X3',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
