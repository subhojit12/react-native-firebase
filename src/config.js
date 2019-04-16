import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBRBFk63rXkNiH-Kh8XS5rWaqtylmYkEpg",
    authDomain: "nativetest-1f1a1.firebaseapp.com",
    databaseURL: "https://nativetest-1f1a1.firebaseio.com",
    projectId: "nativetest-1f1a1",
    storageBucket: "nativetest-1f1a1.appspot.com",
    messagingSenderId: "202588731221"
};

let app = Firebase.initializeApp(config);
export const db = app.database();   