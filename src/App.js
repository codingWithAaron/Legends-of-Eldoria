import './App.css';
import React, { useState } from 'react';
import Screen from './screen/Screen';
import Sound from './sound/Sound';

function App() {
  const [magicAmulet, setMagicAmulet] = useState(false)
  const [powerOn, setPowerOn] = useState(false)

  const [className, setClassName] = useState("power-button-off")

  function handlePowerOn (){
    setPowerOn(!powerOn)
  }

  function changePowerClassName(){
    if(className === "power-button-off"){
      setClassName("power-button-on")
    }else{
      setClassName("power-button-off")
    }
  }

  function handlePowerOnAndPowerClassName(){
    handlePowerOn()
    changePowerClassName()
  }

  return (
    <>
      <div id='webpage-background'>
        {powerOn ? <div>
          <Sound />
          <Screen magicAmulet={magicAmulet} setMagicAmulet={setMagicAmulet} />
        </div> : "" }
        <div>
          <div className={powerOn ? "button-group" : "button-group-off"}>
            <button className={className} onClick={handlePowerOnAndPowerClassName}>{powerOn ? "Power Off": "Power On"}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
