import * as firebase from 'firebase';

const config = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  databaseURL: 'DATABASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSENING_SENDER_ID'
};

firebase.initializeApp(config);
export const rootRef = firebase.database().ref();