import './App.css';
import React, { useState } from 'react';
import Home from './home/Home';
import Screen from './screen/Screen';

function App() {
  const [magicAmulet, setMagicAmulet] = useState(false)
  return (
    <>
      <div id='webpage-background'>
        <Home />
        <Screen magicAmulet={magicAmulet} setMagicAmulet={setMagicAmulet} />
      </div>
    </>
  );
}

export default App;
