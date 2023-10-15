import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB7_1huA9n5qu4VBKjrzZLRbaZR9Smy-K0",
	authDomain: "coffee-store-9a023.firebaseapp.com",
	projectId: "coffee-store-9a023",
	storageBucket: "coffee-store-9a023.appspot.com",
	messagingSenderId: "698872843664",
	appId: "1:698872843664:web:8e690163615ee6bdcf7715",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
