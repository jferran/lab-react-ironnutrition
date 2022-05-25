import React from 'react'

function FoodTotal({totalFood, updateFoodQuantity}) {
    const handleClick = (food) => {
        food.quantity=0
        updateFoodQuantity(food)
    }
  return (
    <div className='foodTotal'>
        <h2>Today's foods</h2>
        {totalFood.map(element => 
            <div key={element.name + element.calories}>    
                <p>{element.quantity} {element.name} = {element.calories * element.quantity} </p>
                <button className="button is-info" onClick={() => handleClick(element)}>🗑</button>
            </div>    
        )}
        <h3>Total: {totalFood.reduce((acc, element)=>{
            return acc+(element.calories * element.quantity)
        }, 0)} cal</h3>
    
    </div>
  )
}

export default FoodTotal