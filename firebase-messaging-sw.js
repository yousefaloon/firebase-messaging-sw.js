
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDUO6qo6s6wigFX3I1yz0dAF6jomB8EL_M",
  authDomain: "group-chat-a6ab3.firebaseapp.com",
  databaseURL: "https://group-chat-a6ab3-default-rtdb.firebaseio.com",
  projectId: "group-chat-a6ab3",
  storageBucket: "group-chat-a6ab3.firebasestorage.app",
  messagingSenderId: "741176184903",
  appId: "1:741176184903:web:cc7e65e215cf919bf06162",
  measurementId: "G-1SR53DH1ZS"
};

// ✅ عزل المشروع باسم مخصص
const firebaseApp = firebase.initializeApp(firebaseConfig, "messagingApp");

const messaging = firebase.messaging(firebaseApp);

// استقبال الإشعارات بالخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
