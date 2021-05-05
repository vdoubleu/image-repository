import React, { useState, useEffect } from 'react';
import ImageContainer from './imageContainer.js';
import { GetImages, DeleteImages } from '../../services/imageService.js';
import Config from '../../config.js';

function ImageDisplay() {
  const [images, setImages] = useState([]);
  const imageUrl = Config.imageEndpoint.slice(-1) === "/"
                    ? Config.imageEndpoint
                    : Config.imageEndpoint + "/";

  const prepareImageData = rawImageData => {
     const imageData = rawImageData.map(ni => {
      return {
        name: ni.title,
        id: ni.imageId,
        imgUrl: imageUrl + `url/${ni.imageId}`
      };
    });   

    return imageData;
  }

  useEffect(() => {
    GetImages(Config.mainUserId)
      .then(newImages => {
        const imageData = prepareImageData(newImages);
        setImages(imageData);
      })
      .catch(err => console.error("Error can't get user images\n" + err));
  }, []);

  const delFun = async (delId) => {
    console.log(delId);

    const delRes = await DeleteImages([delId]);
    console.log(delRes);

    const getRes = await GetImages(config.mainUserId);
    console.log(getRes);
    const imageData = prepareImageData(getRes);
    setImages(imageData);
  };

  const containers = images.map(n => <ImageContainer key={n.id} id={n.id} name={n.name} imgUrl={n.imgUrl} deleteImgFun={delFun} />);

  return (
    <div className="container-fluid">
      <div className="d-flex flex-md-wrap justify-content-center">
        {containers}
      </div>
    </div>
  );
}

export default ImageDisplay;
