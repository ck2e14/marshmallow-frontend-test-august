import React from 'react';
import './DragonCard-style.css';

const DragonCard = props => {
   if(!props.dragon) return null  

   const {name, active, orbit_duration_yr, first_flight, description, wikipedia, dry_mass_kg, heat_shield, crew_capacity, flickr_images } = props.dragon

   const thrusters = props.dragon.thrusters[0];
   const outBoundPayloadInKg = props.dragon.launch_payload_mass.kg;
   const returnPayloadInKg = props.dragon.return_payload_mass.kg;
   const heightMeters = props.dragon.height_w_trunk.meters
   const diameterMeters = props.dragon.diameter.meters



   return(
      <div className="dragon-card-wrapper" onMouseEnter={() => props.showImages(flickr_images)}>

            <div className="name">{name}</div>
   
            <div className="info-pane">
   
               <div className="about-dragon">

                  <span>About {name} </span><br/>

                  <div className="about-dragon-contents">
                        {description}<br/> It weighs in at {dry_mass_kg}KG, and is capable of carrying a stunning {outBoundPayloadInKg}KG to the ISS, and {returnPayloadInKg}KG on its return to Earth. {crew_capacity > 0 ? `${name} can support ${crew_capacity} crew members.` : `${name} does not have human crew capabilities.` }
                  </div>

               </div>

   
               { active ? 
                  <div className="active">
                     <span className="active-span">{name} is currently active and has been in orbit for {orbit_duration_yr} years! It first launched on {first_flight}.</span> 
                  </div> 
               : 
                  <div className="active">{name} is not currently active.</div> 
               }
   
               <div className="technical-info">

                  <span>Technical Details</span> <br/>

                  <div className="quickfire-dragon-details">

                     <span>Thrusters: </span>{thrusters.amount} x {thrusters.type} thrusters, each producing {thrusters.thrust.kN}kN of thrust! <br/>

                     <span>Thruster Pods: </span> {thrusters.pods} <br/>

                     <span>Fuels Consumed: </span>{thrusters.fuel_1}, {thrusters.fuel_2 && thrusters.fuel_2} <br/>

                     <span>Height (with trunk): </span> {heightMeters} meters <span>Diameter:</span> {diameterMeters} meters <br/>

                     <span>Heat Shield: </span> Made from {heat_shield.material} with a tolerance of {heat_shield.temp_degrees} degrees, in partnership with {heat_shield.dev_partner}<br/>

                     {/* <div className="click-for-images" onClick={() => props.showImages(flickr_images)}>Click for photos!</div> */}

                     <a href={wikipedia} className="wikipedia-link" target="_blank" title='Opens in a new tab' rel="noopener noreferrer"> More Info (via Wikipedia)</a>


                  </div>

               </div>
   
            </div>

      </div>
   )
}

export default DragonCard