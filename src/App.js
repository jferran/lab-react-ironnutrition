import React from 'react';
//import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = React.useState(foods)
  const [showForm, setShowForm] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const addElement = (item) =>{
    console.log(item)
    setFoodList([...foodList, item])
  }
  const handleShowForm = () => {
    //showForm ? setShowForm(false) : setShowForm(true)
    setShowForm(!showForm)    
}
  const searchFunction = (searchValue) => {
    setSearchValue(searchValue)
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={handleShowForm}>Show form</button>
      {showForm && <AddForm addElement={addElement}/>}
      <h2>Search</h2>
      <Search searchFunction={searchFunction}/>

      {foodList.map( (element, index) => {

        if (element.name.toUpperCase().includes(searchValue.toUpperCase())){
          return (
        <FoodBox key={index + element.name} food={element}/>)
        } else return null
        
      }
        )}
      
    </div>
  );
}

export default App;
