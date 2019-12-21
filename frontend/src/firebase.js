import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCiK6D5CUrmzEklz3CfRVmW7CY_D0QrcZQ",
  authDomain: "ism-the-builder.firebaseapp.com",
  databaseURL: "https://ism-the-builder.firebaseio.com",
  projectId: "ism-the-builder",
  storageBucket: "ism-the-builder.appspot.com",
  messagingSenderId: "1091677356256",
  appId: "1:1091677356256:web:40ecc707e7762d80511085",
  measurementId: "G-2Z8SDHVVKV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

// const storage = firebase.storage();
// const database = firebase.database();
