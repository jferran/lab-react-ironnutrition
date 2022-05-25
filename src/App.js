import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      {foods.map( element => 
      <FoodBox 
        name={element.name} 
        calories={element.calories}
        image={element.image}
        quantity={element.quantity}
        />)}
      
    </div>
  );
}

export default App;
