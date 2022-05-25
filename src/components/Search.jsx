import React from 'react'

function Search({searchFunction}) {
    const [ search, setSearch ] = React.useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
        searchFunction(event.target.value)

    }

  return (
    <div>
        <form>
            <label htmlFor='search'>Search</label>
            <input type="text" name="search" onChange={handleSearch} value={search}/>
        </form>
    </div>
  )
}

export default Search