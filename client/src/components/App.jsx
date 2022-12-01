import React from 'react';
import Ratings from './Ratings';
import Overview from './Overview';
import QandA from './QandA';
import RecommendedItems from './RecommendedItems';

function App() {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>
        Date :
        {new Date().toDateString()}
      </h3>
      <Overview />
      <RecommendedItems />
      <QandA />
      <Ratings />
    </div>
  );
}

export default App;
