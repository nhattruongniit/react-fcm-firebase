importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});