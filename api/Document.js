/* eslint-disable no-console */

import {
  doc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query
} from 'firebase/firestore'

class Document {
  constructor () {
    return null
  }

  // view one document
  async viewOne (uid, collectionName, msg) {
    const db = getFirestore()
    const docRef = doc(db, collectionName, uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return ({
        doc: docSnap.data(),
        uid: docSnap.id,
        path: collectionName
      })
    } else {
      return 'Documento inexistente.'
    }
  }

  // view list of documents
  async viewList (collectionName, quantity) {
    const list = []

    const db = getFirestore()
    const q = query(collection(db, collectionName))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      list.push({
        doc: doc.data(),
        uid: doc.id,
        path: collectionName
      })
    })

    return list
  }

  // add document in collection
  async add (form, collectionName) {
    const db = getFirestore()
    try {
      const job = await addDoc(collection(db, collectionName), form)
      return job
    } catch (e) {
      return e
    }
  }

  // add document
  async att (uid, collectionName, form) {
    const db = getFirestore()
    const docRef = doc(db, collectionName, uid)

    try {
      const job = await updateDoc(docRef, { ...form })
      console.log(job)
      return job
    } catch (e) {
      return e
    }
  }

  // remove document
  async remove (uid, collectionName) {
    const db = getFirestore()

    try {
      const job = await deleteDoc(doc(db, collectionName, uid))
      return job
    } catch (e) {
      return e
    }
  }
}

export default new Document()
