import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-TvtvKCGT0bV11_NZqSBKPnzqudjIt5U",
    authDomain: "study4u-academy.firebaseapp.com",
    projectId: "study4u-academy",
    storageBucket: "study4u-academy.firebasestorage.app",
    messagingSenderId: "1065623508340",
    appId: "1:1065623508340:web:1bdb2611a35941910f0821"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission
Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
        console.log("Notification permission granted.");
        getToken(messaging, { vapidKey: "BIJQDOltLWI7ldptQULlKbrvD-t0u4yr1jkcgMYkdMKunzzhM0LLB2AtrV9V-p8b8LEMk3oMmdrhpkw_1QS9nDA" })
            .then((currentToken) => {
                if (currentToken) {
                    console.log("Device Token:", currentToken);
                    // Send this token to your server to send notifications later
                } else {
                    console.log("No registration token available.");
                }
            })
            .catch((err) => {
                console.error("An error occurred while retrieving token. ", err);
            });
    }
});

// Foreground message handler
onMessage(messaging, (payload) => {
    console.log("Message received in foreground: ", payload);
});
