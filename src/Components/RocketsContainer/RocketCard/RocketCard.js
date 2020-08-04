import React from 'react';
import './RocketCard-style.css'
import { startCase } from 'lodash'

const RocketCard = props => {

   const { rocket_name, active, description, country, first_flight, cost_per_launch, success_rate_pct, engines, first_stage, second_stage, wikipedia, flickr_images} = props.rocket

   const height_meters = props.rocket.height.meters
   const diameter_meters = props.rocket.diameter.meters
   const propellants = `${startCase(engines.propellant_1)}, ${startCase(engines.propellant_2)}`  
   const mass_kg = props.rocket.mass.kg.toLocaleString()
   const localeAdjustedFlightCost = cost_per_launch.toLocaleString()

   if(!props) return null;

   return( 
      <div className="rocket-card-wrapper" onMouseEnter={() => props.showImages(flickr_images)}>

         <div className="name">{rocket_name}</div>

         <div className="rocket-info-pane">

               <div className="about-rocket">

                  <span>About {rocket_name}</span>

                  <div className="about-rocket-contents">

                     {description} <br/>
                     {rocket_name} costs ${localeAdjustedFlightCost} per liftoff.<br/>
                     It launches from the {country} and first flew on {first_flight},
                     

                     {active ? 
                        ' and is currently active!'
                     :
                        ' but is currently inactive.'
                     }

                     <br/><span>Technical Details</span><br/>

                     <div className="quickfire-rocket-details">   

                        <span>Height: </span> {height_meters}meters &nbsp; <span>Diameter: </span> {diameter_meters} meters &nbsp; <span>Mass: </span> {mass_kg}KG<span>Success Rate: </span> {success_rate_pct}% {success_rate_pct === 0 && `${rocket_name} is yet to take its maiden flight.`} <br/>

                        <span>Engines: </span> 
                           {engines.number} {engines.type} {engines.number === 1 ? 'engine' : 'engines'} &nbsp; <span>Thrust-to-weight ratio: </span> {engines.thrust_to_weight} &nbsp; <span>Propellants: </span> {propellants} <br/>

                        <span>First Stage: </span> 
                           {!first_stage.reusable ? 
                              `Non-reusable. Burns ${first_stage.fuel_amount_tons} tons of fuel over ${first_stage.burn_time_sec} seconds` 
                           : 
                              `Reusable. Burns ${first_stage.fuel_amount_tons} tons of fuel over ${first_stage.burn_time_sec} seconds`}<br/>

                        <span>Second Stage: </span> 
                           {!second_stage.reusable ?
                                 `Non-reusable. Burns ${second_stage.fuel_amount_tons} tons of fuel over ${second_stage.burn_time_sec} seconds` 
                              :
                                 `Reusable. Burns ${second_stage.fuel_amount_tons} tons of fuel over ${second_stage.burn_time_sec} seconds`}<br/>

                        <a href={wikipedia} className="wikipedia-link" target="_blank" rel="noopener noreferrer"> More Info (via Wikipedia)</a>

                     </div>

                  </div>

               </div>

         </div>

      </div>
   )
}

export default RocketCard