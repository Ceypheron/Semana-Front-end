import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestora.js'

export async function subscribeToHellfireClub(subscription){
    const db = getFirestore(app)
    const helfireClubCollection = collection(db, 'hellfire')
    const docRef = await addDoc(helfireClubCollection, subscription)
    return docRef.id
}