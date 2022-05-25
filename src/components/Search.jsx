import React from 'react'

function Search({searchFunction}) {
    const [ search, setSearch ] = React.useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
        searchFunction(event.target.value)
    }

  return (
    <div>
        <input type="text" name="search" placeholder="Search" onChange={handleSearch} value={search}/>
    </div>
  )
}

export default Search