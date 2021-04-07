import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDoHxXx2i_YOconzzFDCtuvhPEFmFLrWYs",
    authDomain: "barterapp-64e18.firebaseapp.com",
    projectId: "barterapp-64e18",
    storageBucket: "barterapp-64e18.appspot.com",
    messagingSenderId: "952883639672",
    appId: "1:952883639672:web:3511472ef482024b3f048d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();