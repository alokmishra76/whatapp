import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoWESsz93sz4Xe0dIQYWKdGMkJOwI60oU",
    authDomain: "whatsapp-clone-268ec.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-268ec.firebaseio.com",
    projectId: "whatsapp-clone-268ec",
    storageBucket: "whatsapp-clone-268ec.appspot.com",
    messagingSenderId: "489460629451",
    appId: "1:489460629451:web:de452e9a2289463862404e",
    measurementId: "G-5K9HN9Z2F7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;