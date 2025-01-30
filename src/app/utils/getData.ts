import db from "./firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export async function getCollection(collectionName: string) {
  try {
    const booksCollection = collection(db, collectionName);
    const data = await getDocs(booksCollection);
    return data.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(`There was an error fetching the data in firestore: ${error}`);
  }
}

export async function getDocument(collection: string, document: string) {
  const docRef = doc(db, collection, document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
