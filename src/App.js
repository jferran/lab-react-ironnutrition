import React from 'react';
//import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';

function App() {
  const [foodList, setFoodList] = React.useState(foods)
  const [showForm, setShowForm] = React.useState(false)

  const addElement = (item) =>{
    console.log(item)
    setFoodList([...foodList, item])
  }
  const handleShowForm = () => {
    //showForm ? setShowForm(false) : setShowForm(true)
    setShowForm(!showForm)    
}

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={handleShowForm}>Show form</button>
      {showForm && <AddForm addElement={addElement}/>}

      {foodList.map( (element, index) => 
      <FoodBox key={index + element.name} 
        name={element.name} 
        calories={element.calories}
        image={element.image}
        quantity={element.quantity}
        />)}
      
    </div>
  );
}

export default App;
