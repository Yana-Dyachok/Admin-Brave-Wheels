import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAOl4wZcnBppp99niuGAn9SDoRmpS8Sn-I',
  authDomain: 'admin-brave-wheels.firebaseapp.com',
  projectId: 'admin-brave-wheels',
  storageBucket: 'admin-brave-wheels.firebasestorage.app',
  messagingSenderId: '854133027199',
  appId: '1:854133027199:web:2a3fa14fedef083a0cea4a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
