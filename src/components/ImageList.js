import React from 'react'

function ImageList({images}) {
   const displayImages =  images.map((image)=>{

        return <img key={image.id} src={image.urls.regular} alt={image.description} />

    })
    
  return (
    <div>{displayImages}</div>
  )
}

export default ImageList