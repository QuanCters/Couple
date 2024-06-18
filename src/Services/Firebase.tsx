// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf5LtE-GU6RevCo-oXx-93RvhgjAqHsMo",
  authDomain: "react-native-d9f93.firebaseapp.com",
  databaseURL:
    "https://react-native-d9f93-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-native-d9f93",
  storageBucket: "react-native-d9f93.appspot.com",
  messagingSenderId: "218396096059",
  appId: "1:218396096059:web:71ec2ac341ec620ddace1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { app, database };
