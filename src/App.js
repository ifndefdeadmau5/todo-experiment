import React, { useState } from 'react';
import Child from './Child';
import './App.css';

function App(props) {
  const [name, setName] = useState('default');
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <p>{name}</p>
      </header>
      <Child name={name} />
    </div>
  );
}

export default App;
