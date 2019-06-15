import React, { useState } from 'react';

import List from './List';
import Child from './Child';
import './App.css';

function App(props) {
  const [name, setName] = useState('default');
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
