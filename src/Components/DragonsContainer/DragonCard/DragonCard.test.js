import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DragonCard from './DragonCard'


configure({adapter: new Adapter()})

describe('<DragonCard />', () => {
   const dragon = {   
      "id": "dragon1",
      "name": "Dragon 1",
      "type": "capsule",
      "active": true,
      "crew_capacity": 0,
      "sidewall_angle_deg": 15,
      "orbit_duration_yr": 2,
      "dry_mass_kg": 4200,
      "dry_mass_lb": 9300,
      "first_flight": "2010-12-08",
      "heat_shield": {
        "material": "PICA-X",
        "size_meters": 3.6,
        "temp_degrees": 3000,
        "dev_partner": "NASA"
      },
      "thrusters": [
        {
          "type": "Draco",
          "amount": 18,
          "pods": 4,
          "fuel_1": "nitrogen tetroxide",
          "fuel_2": "monomethylhydrazine",
          "isp": 300,
          "thrust": {
            "kN": 0.4,
            "lbf": 90
          }
        }
      ],
      "launch_payload_mass": {
        "kg": 6000,
        "lb": 13228
      },
      "launch_payload_vol": {
        "cubic_meters": 25,
        "cubic_feet": 883
      },
      "return_payload_mass": {
        "kg": 3000,
        "lb": 6614
      },
      "return_payload_vol": {
        "cubic_meters": 11,
        "cubic_feet": 388
      },
      "pressurized_capsule": {
        "payload_volume": {
          "cubic_meters": 11,
          "cubic_feet": 388
        }
      },
      "trunk": {
        "trunk_volume": {
          "cubic_meters": 14,
          "cubic_feet": 494
        },
        "cargo": {
          "solar_array": 2,
          "unpressurized_cargo": true
        }
      },
      "height_w_trunk": {
        "meters": 7.2,
        "feet": 23.6
      },
      "diameter": {
        "meters": 3.7,
        "feet": 12
      },
      "flickr_images": [
        "https://i.imgur.com/9fWdwNv.jpg",
        "https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg",
        "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
        "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg"
      ],
      "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Dragon",
      "description": "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS)."
   }
   it('should render if given dragon object as props', () => {
      
      const wrapper = shallow( <DragonCard dragon={dragon} />)
      expect(wrapper.exists()).toBe(true)
   });
   it('should return null if no props.dragon', () => {
      const wrapper = shallow( <DragonCard />)
      expect(wrapper.isEmptyRender()).toBe(true)
   })
})