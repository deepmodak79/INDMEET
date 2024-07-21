const { initializeApp } = require("firebase/app");
const {getFirestore} = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAPWSXQGJPdzGOddmp-Lf7TmoqxdIIVLM8",
  authDomain: "meetapp-7f618.firebaseapp.com",
  projectId: "meetapp-7f618",
  storageBucket: "meetapp-7f618.appspot.com",
  messagingSenderId: "1041360532446",
  appId: "1:1041360532446:web:0f7767f4afd341af38234f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;