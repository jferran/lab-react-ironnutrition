import React from 'react'

function FoodTotal({totalFood}) {
    console.log("we have: ", totalFood)
  return (
    <div>
        <h2>Today's foods</h2>
        {totalFood.map(element => {
            return (
                <p key={element.name + element.calories}>{element.quantity} {element.name} = {element.calories * element.quantity} </p>
            )
            
        })}
        <h3>Total: {totalFood.reduce((acc, element)=>{
            return acc+(element.calories * element.quantity)
        }, 0)} cal</h3>
    
    </div>
  )
}

export default FoodTotal