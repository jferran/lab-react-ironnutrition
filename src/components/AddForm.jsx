import React from 'react'
const {useState} = React

function AddForm({addElement}) {
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCaloriesChange = (event) => {
        setCalories(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        addElement({name, calories, image})
        setName('')
        setCalories('')
        setImage('')
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleNameChange} value={name}/>

        <label htmlFor="calories">Calories:</label>
        <input type="number" name="calories" onChange={handleCaloriesChange} value={calories} />

        <label htmlFor="image">Image:</label>
        <input type="text" name="image" onChange={handleImageChange} value={image}/>

        <button>Add</button>
    </form>
    </div>
  )
}

export default AddForm