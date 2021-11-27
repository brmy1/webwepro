/* eslint-disable no-console */
/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unused-expressions */

import {
  doc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  query
} from 'firebase/firestore'

class Document {
  constructor () {
    return null
  }

  // Visualizar um unico documento
  async viewOne (uid, collectionName, msg) {
    const db = getFirestore()
    const docRef = doc(db, collectionName, uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
    } else {
      console.log('No such document!')
    }
  }

  // Visualizar lista completa de uma coleção
  async viewList (collectionName, quantity, msg) {
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

  // Adicionar documento a uma coleção
  async add (form, collectionName, msg) {
    const db = getFirestore()
    try {
      await addDoc(collection(db, collectionName), form)
      return msg.success
    } catch (e) {
      return msg.error
    }
  }

  // Editar um documento já existente
  async edit (form, uid, collection) {}

  // Remover um documento existente
  async remove (uid, collectionName, msg) {
    const db = getFirestore()

    try {
      await deleteDoc(doc(db, collectionName, uid))
      return msg.success
    } catch (e) {
      return msg.error
    }
  }
}

export default new Document()
