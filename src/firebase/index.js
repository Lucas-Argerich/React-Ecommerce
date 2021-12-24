import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import keys from './keys.js'

const firebaseApp = initializeApp(keys)

export const db = getFirestore()