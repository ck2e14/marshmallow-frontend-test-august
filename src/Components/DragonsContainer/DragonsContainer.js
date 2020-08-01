import React, { useState, useEffect } from 'react';
import './DragonsContainer-style.css';
import './DragonCard/DragonCard.js';
import API from '../../Adapters/API';
import DragonCard from './DragonCard/DragonCard.js';
import ImageCard from '../ImageCard/ImageCard';

const DragonsContainer = () => {

   const [ dragons, setDragons ] = useState([]);
   const [ openGallery, setOpenGallery ] = useState(false)
   const [ dragonImages, setDragonImages ] = useState(null)


   useEffect(() => {
      API.fetchDragons().then(data => setDragons(data))
   }, [])

   const handleGalleryOpenClick = dragonImageArray => {
      setOpenGallery(true)
      setDragonImages(dragonImageArray)
   }

   const buildImageCards = () => {
      if(!dragonImages || dragonImages.length < 1) return
      return dragonImages.map(url => {
         return <ImageCard url={url}/>
      })
   }

   const buildDragonCards = () => {
      if(!dragons || dragons.length === 0) return 
      return dragons.map(dragon => {
         return <DragonCard dragon={dragon} key={dragon.name} showImages={handleGalleryOpenClick} />
      })
   }

   if(dragons.length < 1) return null

   return (
      <>
      <a href="https://www.youtube.com/watch?v=xllfBA0bIZs" target="_blank" rel="noopener noreferrer" className="wikipedia-link youtube-link">Live-stream scheduled for Crew Dragon's return home! 2/08/20</a>

         { openGallery && 
            <div className="gallery-wrapper">
               {buildImageCards()}
            </div> 
         }
         
            <div className="dragons">
               <div className="title">
                  SpaceX Dragons
               </div>
               {buildDragonCards()}
            </div>

      </>
   )
}

export default DragonsContainer