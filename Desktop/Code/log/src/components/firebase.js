import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'; 

const firebaseConfig = { 
	apiKey: "AIzaSyCvJfaTLhC9P2O69K-Ro3Vh1b9wuarxGe4", 
	authDomain: "login-52a1c.firebaseapp.com", 
	projectId: "login-52a1c", 
	storageBucket: "login-52a1c.appspot.com", 
	messagingSenderId: "882708029600", 
	appId: "1:882708029600:web:fd1edcb49ac0753261a9c5", 
	measurementId: "G-F735GDGN26"
}; 

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);


