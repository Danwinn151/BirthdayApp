import { useState } from 'react'
import "./App.css"
import { data } from './constants/data'
import Header from './Components/Header'
import BirthdayCard from './Components/BirthdayCard'
import SearchBar from './Components/SearchBar'
function App() {
  const [people, setPeople] = useState(data)
  const[searchTerm, setSearchTerm] = useState("")
  const[searchResults, setSearchResults] = useState(false)

  const filteredPeople = people.filter(person => {
    return Object.values(person).join("").toLowerCase().includes(searchTerm.toLowerCase())
  })
  console.log(filteredPeople)
  return (
    <main>
      <section className="">
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Header people={people}/>

      <BirthdayCard searchTerm={searchTerm} people={filteredPeople} setPeople={setPeople}/>
      
    </section>
    </main>
    
  )
}

export default App
