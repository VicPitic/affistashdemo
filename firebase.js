import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCBRhAW0AQO_-11qc0aujbGowc8O4E7luo",
  
    authDomain: "affistash.firebaseapp.com",
  
    projectId: "affistash",
  
    storageBucket: "affistash.appspot.com",
  
    messagingSenderId: "506018951317",
  
    appId: "1:506018951317:web:3f6d763719c5faecc86b9c",
  
    measurementId: "G-XMN8P02NN1"
  
  };
  



// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;