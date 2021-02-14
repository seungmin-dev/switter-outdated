import firebase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyCR9ZOoxlRtTBL1yfL2lWMp5uG9k8o2KDM",
  authDomain: "switter-4148e.firebaseapp.com",
  projectId: "switter-4148e",
  storageBucket: "switter-4148e.appspot.com",
  messagingSenderId: "602960613205",
  appId: "1:602960613205:web:05ed20b43ff79e8f45a9dc"
};
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();