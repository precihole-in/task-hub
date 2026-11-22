// Service worker for Task Hub phone notifications (Firebase Cloud Messaging).
importScripts('notify-config.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
if (self.TH_FIREBASE) {
  firebase.initializeApp(self.TH_FIREBASE);
  firebase.messaging(); // FCM shows webpush.notification messages itself
}
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('./?open=notifs'));
});
