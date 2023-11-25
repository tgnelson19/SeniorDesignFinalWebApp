import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
require('dotenv').config()

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  databaseURL: REACT_APP_DATABASEURL,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);