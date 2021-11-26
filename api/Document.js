/* eslint-disable no-console */
/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unused-expressions */

import {
  doc,
  collection,
  addDoc,
  getDoc,
  getFirestore,
  query,
  getDocs
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
      list.push(doc.data())
    })

    return list
  }

  // Adicionar documento a uma coleção
  async add (form, collectionName, msg) {
    const db = getFirestore()

    try {
      const docRef = await addDoc(collection(db, collectionName), form)
      return docRef.data()
    } catch (e) {
      return e
    }
  }

  // Editar um documento já existente
  edit (form, uid, collection) {}
}

export default new Document()
