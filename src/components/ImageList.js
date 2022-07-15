import React from 'react'

function ImageList({images}) {
   const displayImages =  images.map((image)=>{

        return <img src={image.urls.regular} alt='' />

    })
    
  return (
    <div>{displayImages}</div>
  )
}

export default ImageList