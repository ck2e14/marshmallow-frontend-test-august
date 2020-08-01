import React from 'react'
import './ImageCard-style.css'

const ImageCard = props => {

   const { url } = props

   return(
      <div className="img-card-wrapper">
         <img src={url} alt="Amazing SpaceX Creations!" className="dragon-image"/>
      </div>
   )
}

export default ImageCard