import React, { useState, useEffect } from 'react';
import './RocketsContainer-style.css';
import API from '../../Adapters/API';
import ImageCard from '../ImageCard/ImageCard';
import RocketCard from '../RocketsContainer/RocketCard/RocketCard';

const RocketsContainer = () => {

   const [ rockets, setRockets ] = useState([]);
   const [ openGallery, setOpenGallery ] = useState(false);
   const [ rocketImages, setRocketImages ] = useState(null);

   useEffect(() => {
      API.fetchRockets().then(data => setRockets(data))
   }, [])

   const handleSlideshowOpenClick = rocketImageArray => {
      setOpenGallery(true)
      setRocketImages(rocketImageArray)
   }

   const buildImageCards = () => {
      if(!rocketImages || rocketImages.length < 1) return
      let truncatedArray = rocketImages.slice(0, 4)
      return truncatedArray.map(url => {
         return <ImageCard url={url}/>
      })
   }
      // this is a bit hacky, I know, but it reliably controls the output sizing for the gallery when there are a lot of URLs. It works for now! With a longer time-frame I would make a carousel/use an npm package to sit over the top of every other element to cycle through every img url returned by API.


   const buildRocketCards = () => {
      if(!rockets || rockets.length === 0) return 
      return rockets.map(rocket => {
         return <RocketCard rocket={rocket} key={rocket.rocket_name} showImages={handleSlideshowOpenClick} />
      })
   }


   return(
      <>

{ openGallery && 
            <div className="gallery-wrapper">
               {buildImageCards()}
            </div> 
         }
         <div className="rockets">
            
            <div className="rockets-title">
               SpaceX Rockets
            </div>

            <div className="rocket-cards-wrapper">
               {buildRocketCards()}
            </div>
            
         </div>
      </>
   )

}

export default RocketsContainer