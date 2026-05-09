import { db }
from "./firebase.js";

import {

  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ➕ ADD
export async function addProduct(product) {

  await addDoc(
    collection(db, "products"),
    product
  );

}

// 📦 GET
export async function getProducts() {

  const querySnapshot =
    await getDocs(
      collection(db, "products")
    );

  const products = [];

  querySnapshot.forEach(docSnap => {

    products.push({

      id: docSnap.id,

      ...docSnap.data()

    });

  });

  return products;

}

// ❌ DELETE
export async function deleteProduct(id) {

  await deleteDoc(
    doc(db, "products", id)
  );

}

// ✏️ UPDATE
export async function updateProduct(
  id,
  updatedData
) {

  await updateDoc(
    doc(db, "products", id),
    updatedData
  );

}
