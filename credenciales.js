// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEq7UT_DxQdemkLf7fkJJOSIfgpgD3oTA",
  authDomain: "logincamila.firebaseapp.com",
  projectId: "logincamila",
  storageBucket: "logincamila.appspot.com",
  messagingSenderId: "1087332503109",
  appId: "1:1087332503109:web:4da588f229223314519d2c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase