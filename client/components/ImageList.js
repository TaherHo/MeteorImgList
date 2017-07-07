/**
 * Created by taho on 03.07.17.
 */
import React from 'react';
import ImageDetails from './ImageDetails';


const IMAGES=[
    {title:'Joni',link:'https://dummyimage.com/600x400'},
    {title:'Bär',link:'https://dummyimage.com/600x400'},
    {title:'Wolf',link:'https://dummyimage.com/600x400'}
    ];



const ImageList = function () {
    const RenderdImages= IMAGES.map(function (image) {
        return(
            <ImageDetails image={image}/>
        );
    });

  return(
      <ul className="media-list list-group">
          {RenderdImages}
      </ul>
  );
};

export default ImageList;
