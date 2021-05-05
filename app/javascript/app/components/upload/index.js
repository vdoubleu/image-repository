import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { UploadImages } from '../../services/imageService.js';
import Config from '../../config.js';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import './upload.css';

function ImageUpload() {
  const [uploaderDisabled, setUploaderDisabled] = useState(false);

  const handleSubmit = (doneFiles, allFiles) => {
    console.log(doneFiles);

    setUploaderDisabled(true);

    const trimmedDoneFiles = doneFiles.map(f => ({ file: f.file, meta: f.meta, userId: Config.mainUserId }));
    UploadImages(trimmedDoneFiles)
      .then(res => {
        console.log(res);
        allFiles.forEach(f => f.remove());
        setUploaderDisabled(false);
        alert('Successfully uploaded files');
      })
      .catch(err => {
        console.error(err);
        allFiles.forEach(f => f.remove());
        setUploaderDisabled(false);
        alert('Error uploading files \n' + err);
      });
  }

  return (
    <div className='container'>
      <div className={'m-5' + (uploaderDisabled ? ' disable-uploader' : '')}>
        <Dropzone
          onSubmit={handleSubmit}
          accept="image/*"
          InputComponent={uploaderDisabled ? null : ''}
        />
      </div>
      {uploaderDisabled ? (<div className='d-flex justify-content-md-center'>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>) : ''}
    </div>
  )
}

export default ImageUpload;
