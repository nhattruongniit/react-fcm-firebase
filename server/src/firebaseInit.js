import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('./adminsdk.json'),
  databaseURL: "https://react-fcm-firebase.firebaseio.com",
});

export const messaging = admin.messaging();
