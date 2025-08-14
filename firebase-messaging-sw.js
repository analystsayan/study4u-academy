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

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/media/img/company/favicon.jpg'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
