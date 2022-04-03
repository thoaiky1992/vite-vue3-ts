import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENTID
};

export const vapidKey = import.meta.env.VITE_APP_FIREBASE_VAPIDKEY;

firebase.initializeApp(firebaseConfig);

export async function subscribeToServer() {
  try {
    const serviceWorkerRegistration = await navigator.serviceWorker.getRegistration();
    console.log(serviceWorkerRegistration);

    const token = await firebase.messaging().getToken({
      vapidKey,
      serviceWorkerRegistration
    });
    const subscription = {
      token
    };
    console.log(subscription);

    // await fetch('/authentication/staff/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify(subscription)
    // });
    return true;
  } catch (e) {
    console.error(e);
    throw new Error('internal-error');
  }
}

export default async function registerNotification() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.error(new Error('browser-not-support'));
    return false;
  }
  const permissionResult = await Notification.requestPermission();
  if (permissionResult !== 'granted') {
    console.error(new Error('permission-block'));
    return false;
  }
  return subscribeToServer();
}
