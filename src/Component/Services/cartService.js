import {
  doc,
  setDoc,
  updateDoc,
  getDoc,
  increment,
  collection,
  getDocs,
  deleteDoc,          // ✅ missing import
} from "firebase/firestore";
import { db } from "../../firebase";

/* 🛒 ADD TO CART */
export const addtocart = async (product) => {
  const cartRef = doc(db, "cart", "main", "items", product.id);

  const snap = await getDoc(cartRef);

  if (snap.exists()) {
    await updateDoc(cartRef, {
      qty: increment(1),
    });
  } else {
    await setDoc(cartRef, {
      id: product.id,          // product id
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }
};

/* 📥 GET CART */
export const getCartFromFirebase = async () => {
  const itemsRef = collection(db, "cart", "main", "items");
  const snapshot = await getDocs(itemsRef);

  return snapshot.docs.map((doc) => ({
    docId: doc.id,     
    ...doc.data(),
  }));
};

export const removeCartItemFromFirebase = async (docId) => {
  const ref = doc(db, "cart", "main", "items", docId);
  await deleteDoc(ref);
};

export const updateQtyInFirebase = async (docId,qty) => {
  const ref = doc(db, "cart", "main", "items", docId);
  await updateDoc(ref,{qty})

}
