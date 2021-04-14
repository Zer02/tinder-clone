import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAcPe_pl0mkAEWv38iWXbVIPrQIf2LqLeI",
  authDomain: "tinder-clone-734f8.firebaseapp.com",
  projectId: "tinder-clone-734f8",
  storageBucket: "tinder-clone-734f8.appspot.com",
  messagingSenderId: "827282895583",
  appId: "1:827282895583:web:2d1faf5a563cd69cd92f6a",
  measurementId: "G-YV06SHMJDZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;