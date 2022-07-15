import React from 'react'
import './ImageList.css'

function ImageList({images}) {
   const displayImages =  images.map(({id , description, urls})=>{

        return <img key={id} src={urls.regular} alt={description} />

    })
    
  return (
    <div className='image-list'>{displayImages}</div>
  )
}

export default ImageList