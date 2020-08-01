import React, { useState } from 'react';
import './App.css';
import DragonsContainer from './Components/DragonsContainer/DragonsContainer'
import RocketsContainer from './Components/RocketsContainer/RocketsContainer'
// import spaceX from './Assets/spaceX.jpeg'
import spaceX2 from './Assets/spaceX2.png'

const App = () => {

  const [ showDragons, setShowDragons ] = useState(true);
  const [ showRockets, setShowRockets ] = useState(false);

  const handleDragonTabClick = () => {
    setShowDragons(!showDragons);
    setShowRockets(!showRockets);
  }

  return(
    <>
    <div className="background-img-wrapper">
      <img src={spaceX2} alt="" className="background-img"/>
    </div>
      
      <div className="list-container">

        <div className="toggle-containers" onClick={() => handleDragonTabClick()}>
          { !showDragons ? 'View SpaceX Dragons!' : 'View SpaceX Rockets!' }
        </div>

        { showDragons ? 
          <DragonsContainer />
        : null }

        { showRockets ? 
          <RocketsContainer />
        : null }

        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap" rel="stylesheet"></link>

      </div>
    </>
  )
}
export default App;