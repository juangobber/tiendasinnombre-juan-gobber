// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_1G6HYBjm4wYizygAMOlxywKTSSLAx-0",
  authDomain: "tienda-sin-nombre.firebaseapp.com",
  projectId: "tienda-sin-nombre",
  storageBucket: "tienda-sin-nombre.appspot.com",
  messagingSenderId: "394942134091",
  appId: "1:394942134091:web:baa0bead5a607859929ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); //el nombre puede ser cualquiera, baseDeDatos, dataBase, etc

export async function getItems(){
    const miCollection = collection(firestore, "productos")
    let respuesta =  await getDocs(miCollection); //getDocs trae los elementos de la database. A esto lo guardo en snapshotDB, se denomina asi porque es como una captura de la DB
    let dataDocs = respuesta.docs.map( documento =>{
        let docFormateado = {...documento.data(), id: documento.id}
        return docFormateado
    });

    return dataDocs
}

export async function getItem(idParams){
    const docRef = doc(firestore, "productos", idParams)
    const docSnapshot = await getDoc(docRef)

   return {...docSnapshot.data(), id: docSnapshot.id}
}

export async function getItemsByCategory(catParams){
    const miCollection = collection(firestore, "productos");
    const queryCategory = query(miCollection, where("category", "==", catParams))

    const respuesta = await getDocs(queryCategory)

    let dataDocs = respuesta.docs.map( documento =>{
        let docFormateado = {...documento.data(), id: documento.id}
        return docFormateado
    });
    return dataDocs
}

export default firestore;

export async function createBuyOrder(orderData){
    const orderCollection = collection(firestore, "orders");
    let respuesta = await addDoc(orderCollection, orderData);
    return (respuesta.id)
}

