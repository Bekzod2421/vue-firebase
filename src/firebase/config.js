import { initializeApp } from 'firebase/app';
import {
	getFirestore
} from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyDTsriaoeW9Us9gjxUTVxiqGRi2j_FxsP4",
	authDomain: "fir-for-vue-project.firebaseapp.com",
	projectId: "fir-for-vue-project",
	storageBucket: "fir-for-vue-project.appspot.com",
	messagingSenderId: "730410742172",
	appId: "1:730410742172:web:ab90b19bbed3406de11859"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()

export { db }