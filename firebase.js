import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIimu8nRwyz39IMZsTBu1jX1qxkmbsgmk",
  authDomain: "twitter-clone-ab5a0.firebaseapp.com",
  projectId: "twitter-clone-ab5a0",
  storageBucket: "twitter-clone-ab5a0.appspot.com",
  messagingSenderId: "510628192857",
  appId: "1:510628192857:web:9bb16f729d0981d7b44748"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };