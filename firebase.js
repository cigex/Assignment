// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArRwvK5RUKM021ROzZKQqm-L56zuSELQ8",
  authDomain: "codedlinestask.firebaseapp.com",
  projectId: "codedlinestask",
  databaseURL: "https://codedlinestask-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "codedlinestask.appspot.com",
  messagingSenderId: "157224338826",
  appId: "1:157224338826:web:c1cad7fd746a47ebf7f473"
};

// Initialize Firebase 
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

// const database = firebase.database(app);
// const collection = database.collection("test");

export { auth };
