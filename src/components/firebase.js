// firebase.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyB8nPgZreHH-UGFoP9AbsY6tEmxGe0j2ic",
	authDomain: "myapplication13-407c4.firebaseapp.com",
	databaseURL: "https://myapplication13-407c4.firebaseio.com",
	projectId: "myapplication13-407c4",
	storageBucket: "myapplication13-407c4.appspot.com",
	messagingSenderId: "446261191958",
	appId: "1:446261191958:web:268258939af43af8f65c37",
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
