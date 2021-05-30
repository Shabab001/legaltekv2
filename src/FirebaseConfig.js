
import firebase from 'firebase/app'
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyB8J8Sc-4mzm8XU75df6EKCqOfVDmb7S5M",
    authDomain: "xukini-92956.firebaseapp.com",
    projectId: "xukini-92956",
    storageBucket: "xukini-92956.appspot.com",
    messagingSenderId: "352726736969",
    appId: "1:352726736969:web:77ca13dac1fa913c489f98",
    measurementId: "G-XPZRGD87LH"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()

  export { storage, firebase as default}