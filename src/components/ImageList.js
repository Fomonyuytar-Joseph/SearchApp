import React from 'react'

function ImageList({images}) {
   const displayImages =  images.map(({id , description, urls})=>{

        return <img key={id} src={urls.regular} alt={description} />

    })
    
  return (
    <div>{displayImages}</div>
  )
}

export default ImageList