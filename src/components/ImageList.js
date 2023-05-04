import React from 'react';



function ImageList(props) {
  return (
    <div className="image-list-container">
      {props.images.map((image, index) => (
        <div className='image-container'>
          <img className='image'
            src={loadImage(image[1])}
            key={index}
            alt={`Image ${index}`}
          />
          <p>{image[0]}</p>
        </div>
      ))}
    </div>
  );
}

function loadImage(source) {
  const image = require('../assets/' + source)
  return image
}

export default ImageList

