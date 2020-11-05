import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC-jTOehKEGIEgbNUXZFg7kOTaXRbUgI_0",
  authDomain: "nba-full-19e66.firebaseapp.com",
  databaseURL: "https://nba-full-19e66.firebaseio.com",
  projectId: "nba-full-19e66",
  storageBucket: "nba-full-19e66.appspot.com",
  messagingSenderId: "139050222590",
  appId: "1:139050222590:web:a9c587a6a29404a79476af",
  measurementId: "G-HPGY52J916",
};
firebase.initializeApp(firebaseConfig);
// we have different collections and references inside the database (articles, videos etc) so i had to create variables for each one of them

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

// a general function to get data from the firebase database

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper,
};
