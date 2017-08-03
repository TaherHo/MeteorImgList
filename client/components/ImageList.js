/**
 * Created by taho on 03.07.17.
 */
import React from 'react';
import ImageDetails from './ImageDetails';


const ImageList = function (props) {
    const validImages=props.images.filter(image => !image.is_album );
    const RenderdImages= validImages.map(function (image) {
        return(
            <ImageDetails key={image.title} image={image}/>
        );
    });

  return(
      <ul className="media-list list-group">
          {RenderdImages}
      </ul>
  );
};

export default ImageList;
