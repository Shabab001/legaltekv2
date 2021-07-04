import React, {Component} from 'react'
import { storage } from "../../../FirebaseConfig";

export default class MyCKEditorUploadAdapter extends Component {
    constructor(props) {
      super(props);
      this.loader = props.loader;
    }
    // Starts the upload process.
    upload() {
      return this.loader.file.then(
        (file) =>
          new Promise((resolve, reject) => {
            console.log(file);
            let currentTimeDate = Date.now();
            console.log(this.props);
            const uploadTask = storage
              .ref(`images/${this.props.auth.user._id}/blogs/`)
              .child(`${file.name}-${currentTimeDate}`)
              .put(file);
            console.log("reached here");
            uploadTask.on(
              "state_changed",
  
              (snapshot) => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // setProgress(progress);
              },
              (error) => {
                console.log(error);
              },
              () => {
                storage
                  .ref(`images/${this.props.auth.user._id}/blogs/`)
                  .child(`${file.name}-${currentTimeDate}`)
                  .getDownloadURL()
                  .then(async (url) => {
                    console.log(url);
                    resolve({ default: url });
                  });
              }
            );
          })
      );
    }
  }