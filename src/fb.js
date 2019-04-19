import firebase from 'firebase/app';
import 'firebase/firestore';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiicANs_SgH2JmggyX0jweAUTtrMb3JHc",
    authDomain: "vuetify-learn-e7b95.firebaseapp.com",
    databaseURL: "https://vuetify-learn-e7b95.firebaseio.com",
    projectId: "vuetify-learn-e7b95",
    storageBucket: "vuetify-learn-e7b95.appspot.com",
    messagingSenderId: "550330568782"
};
firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export default db;