import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyCOTic1qm75yNtQ7I_b2vq39mBq8W-JKdQ",
  authDomain: "react-fcm-firebase.firebaseapp.com",
  databaseURL: "https://react-fcm-firebase.firebaseio.com",
  projectId: "react-fcm-firebase",
  storageBucket: "react-fcm-firebase.appspot.com",
  messagingSenderId: "340721624522",
  appId: "1:340721624522:web:6de13808b2b937da19db33"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });