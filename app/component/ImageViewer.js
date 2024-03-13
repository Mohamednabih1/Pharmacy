// components/ImageViewer.js

import React, { useState } from 'react'
import Image from 'next/image'
import './imageViewer.css'
const ImageViewer = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="image-viewer">
      <div className="main-image">
        <Image src={mainImage} alt="Main Image" />
      </div>
      <div className="thumbnail-gallery">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageViewer
