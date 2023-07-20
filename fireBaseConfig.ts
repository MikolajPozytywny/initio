// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const isLocal = process.env.NODE_ENV === "development";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGO6kPhvn01nI1P5V7cnllVYBs2uZyYNs",
  authDomain: isLocal ? "192.168.0.115" : "initio-f1fed.firebaseapp.com",
  databaseURL: isLocal
    ? "http://192.168.0.115:9000"
    : "https://initio-f1fed-default-rtdb.firebaseio.com",
  projectId: "initio-f1fed",
  storageBucket: "initio-f1fed.appspot.com",
  messagingSenderId: "516680610433",
  appId: "1:516680610433:web:c2df8c4febeda14c6d9380",
  measurementId: "G-N2DHHYK2FC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);

// Connect to the Firebase Emulator Suite for functions
if (isLocal) {
  console.log("Connecting to the local Firebase Emulator Suite...");
  connectFunctionsEmulator(functions, "192.168.0.115", 5001);
  connectAuthEmulator(auth, "http://192.168.0.115:9099");
}
