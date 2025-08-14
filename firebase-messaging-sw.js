importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC-TvtvKCGT0bV11_NZqSBKPnzqudjIt5U",
    authDomain: "study4u-academy.firebaseapp.com",
    projectId: "study4u-academy",
    storageBucket: "study4u-academy.firebasestorage.app",
    messagingSenderId: "1065623508340",
    appId: "1:1065623508340:web:1bdb2611a35941910f0821"
});

firebase.messaging();
