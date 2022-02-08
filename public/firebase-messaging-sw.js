// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCL7IFUCsE0txzcKmi1_FPGxbpJ9cIHy38',
  authDomain: 'cheeers-e358f.firebaseapp.com',
  databaseURL: 'https://cheeers-e358f.firebaseio.com',
  projectId: 'cheeers-e358f',
  storageBucket: 'cheeers-e358f.appspot.com',
  messagingSenderId: '372051445327',
  appId: '1:372051445327:web:38be0cd7e03dcd0dfd0c3a'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = firebase.messaging();
