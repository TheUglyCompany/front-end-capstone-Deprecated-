import React from 'react';
import Ratings from './Ratings';

function App() {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>
        Date :
        {new Date().toDateString()}
      </h3>
      <Ratings/>
    </div>
  );
}

export default App;
