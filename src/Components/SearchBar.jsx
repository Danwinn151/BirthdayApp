import React from 'react'

function SearchBar({searchTerm, setSearchTerm}) {
    console.log(searchTerm)
  return (
    <div>
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='input rounded-lg px-3 py-4' type={"text"} placeholder="search your birthday"/>
    </div>
  )
}

export default SearchBar