// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBnLKWcokkUnWD6aJsvEz79IEJPUDZ1tu4",
	authDomain: "social-media-app-53f26.firebaseapp.com",
	projectId: "social-media-app-53f26",
	storageBucket: "social-media-app-53f26.appspot.com",
	messagingSenderId: "741271026728",
	appId: "1:741271026728:web:d77f556ab47c6eb68dc91d",
	measurementId: "G-19BVJH4PY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
