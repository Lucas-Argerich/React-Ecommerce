import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCnIJJI3Uyv2U_1Z60wKWIAlT66lUDGQJc",
  authDomain: "react-ecommerce-coderhou-17779.firebaseapp.com",
  projectId: "react-ecommerce-coderhou-17779",
  storageBucket: "react-ecommerce-coderhou-17779.appspot.com",
  messagingSenderId: "1007285532751",
  appId: "1:1007285532751:web:b5fc5e09f83772ee36923a",
  measurementId: "G-XWD85W6KJH"
})

export const db = getFirestore()
