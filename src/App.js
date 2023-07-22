import './App.css';
import React, { useState } from 'react';
import Home from './home/Home';
import Screen from './screen/Screen';
import Sound from './sound/Sound';

function App() {
  const [magicAmulet, setMagicAmulet] = useState(false)

  return (
    <>
      <div id='webpage-background'>
        <Sound />
        <Home />
        <Screen magicAmulet={magicAmulet} setMagicAmulet={setMagicAmulet} />
      </div>
    </>
  );
}

export default App;
