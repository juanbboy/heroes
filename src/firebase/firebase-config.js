import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/messaging';

// import { initializeApp } from 'firebase/app';
// import { getToken, getMessaging, onMessage } from 'firebase/messaging';

// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCSaJzJYoLaAhDK7w55MC4Oz4MVvxjUE4E",
  authDomain: "react-auth-app-6a340.firebaseapp.com",
  projectId: "react-auth-app-6a340",
  storageBucket: "react-auth-app-6a340.appspot.com",
  messagingSenderId: "778269297947",
  appId: "1:778269297947:web:fe855452be4a5d767257be",
  measurementId: "G-960E23P220"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseConfig);

// const getOrRegisterServiceWorker = () => {
//   if ('serviceWorker' in navigator) {
//     return window.navigator.serviceWorker
//       .getRegistration('/firebase-push-notification-scope')
//       .then((serviceWorker) => {
//         if (serviceWorker) return serviceWorker;
//         return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//           scope: '/firebase-push-notification-scope',
//         });
//       });
//   }
//   throw new Error('The browser doesn`t support service worker.');
// };

// const getFirebaseToken = () =>
//   getOrRegisterServiceWorker()
//     .then((serviceWorkerRegistration) =>
//       getToken(messaging, { vapidKey: "BLRVXyaWyn0wPcekaY0GKohiBzody2P9nYNkBp6u4hIhOf0e1sKgNf-VyGU461IvVVCycpZeItBIuewhVLUGlPA", serviceWorkerRegistration }));

// const onForegroundMessage = () =>
//   new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));



export {
  db,
  googleAuthProvider,
  firebase,
  // getFirebaseToken,
  // onForegroundMessage,
  // getOrRegisterServiceWorker,

}
