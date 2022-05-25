import React from 'react'

function FoodBox({food, addFoodUnit}) {
    const {name, calories, image} = food
    const [quantity, quantitySet] = React.useState(food.quantity)
    const handleIncrease = (event) => {
        parseInt(event.target.value)>=0 && quantitySet(event.target.value)
    }
    const handleClick = (operator) =>{
        console.log("operator", operator)
        if(operator === '-' && food.quantity>=quantity)addFoodUnit({name, quantity})
        else if (operator === '+') addFoodUnit({name, quantity})
        
    }
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} width="50px" alt=''/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" onChange={handleIncrease} value={quantity} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => handleClick('+')}>+</button>
              <button className="button is-info" onClick={() => handleClick('-')}>-</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
