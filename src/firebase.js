import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAAKJQpsuIn7w6lxAkdgHbVuQGSwBwF3XY",
  authDomain: "uji-portfolio.firebaseapp.com",
  projectId: "uji-portfolio",
  storageBucket: "uji-portfolio.firebasestorage.app",
  messagingSenderId: "639988607077",
  appId: "1:639988607077:web:52ecc79e128916d1367e8c",
  measurementId: "G-YJ062DQEX6"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };