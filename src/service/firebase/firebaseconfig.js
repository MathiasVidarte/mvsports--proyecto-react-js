// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase para la aplicación web
const firebaseConfig = {
    apiKey: "AIzaSyB_Ggjuhqmx3kHZmfMVgPX97LLuUniWi0M",
    authDomain: "mvsport-34228.firebaseapp.com",
    projectId: "mvsport-34228",
    storageBucket: "mvsport-34228.appspot.com",
    messagingSenderId: "242949404239",
    appId: "1:242949404239:web:f7c6fdf6816de2fc1b1c3a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
export const db = getFirestore(app);

