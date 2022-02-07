import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyAI7NcuRdGnOqWifvzaievuvS-8b8klHbk',
  authDomain: 'cheeers-72364.firebaseapp.com',
  projectId: 'cheeers-72364',
  storageBucket: 'cheeers-72364.appspot.com',
  messagingSenderId: '568928451421',
  appId: '1:568928451421:web:43d3a478d57902374c46b4',
  measurementId: 'G-9YPYPHHSSH'
};

export const vapidKey =
  'BK2QBvknwYMNYm5xxJXUXjwfKVlEt_bKnh2r7Ohufo0u2Jxa44hr8bsnsBqfGKgUGDTkPZCsLxHDKfgdf1cLtbo';

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
