import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <FoodBox/>
    </div>
  );
}

export default App;
