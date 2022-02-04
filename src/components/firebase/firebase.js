import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSG2tpyeMkU5qJPC40lJ7nvafblr5ddZ4",
  authDomain: "photo-tag-375c2.firebaseapp.com",
  projectId: "photo-tag-375c2",
  storageBucket: "photo-tag-375c2.appspot.com",
  messagingSenderId: "391924122592",
  appId: "1:391924122592:web:a5ad6eacabbc7e2b9d6185",
};

initializeApp(firebaseConfig);
const db = getFirestore();

const addMessage = async (name, seconds) => {
  const docRef = await addDoc(collection(db, "leaderboard"), {
    name,
    seconds,
  });
};

export { db, addMessage };
