/* eslint-disable no-console */
/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unused-expressions */

import * as storage from 'firebase'

class Upload {
  constructor () {
    return null
  }

  ProfilePicture (event) {
    const file = event.target.files[0]
    const storageRef = storage.firebase.storage().ref()
    const uploadTask = storageRef.child(`images/profile/${file.name}`).put(file)

    uploadTask.on('state_changed', function (snapshot) {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')

      switch (snapshot.state) {
        case storage.firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused')
          break
        case storage.firebase.storage.TaskState.RUNNING:
          console.log('Upload is running')
          break
      }
    }, function (error) {
      console.log(error)
    }, function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL)
      })
    })
  }
}

export default new Upload()
