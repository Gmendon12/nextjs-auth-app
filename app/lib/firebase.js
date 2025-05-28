import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDlJ39bmgQmdzhf_bg3GfhHXIeoB7pE4BM",
    authDomain : "auth-c69fd.firebaseapp.com",
    projectId : "auth-c69fd",
    storageBucket: "auth-c69fd.appspot.com",
    messagingSenderId: "6386947447",
    appId : "1:6386947447:web:4add2249a069b8c4953d72",
    measurementId: "G-Q4YXNS7F5J"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

setPersistence(auth, browserLocalPersistence)

export {auth, provider}