import { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '015-12345',
      id: 1
    },
    {
      name: 'Ada Lovelace',
      number: '029-67890',
      id: 2
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const add = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} /></p>
      <h2>Add a new</h2>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} /></div>
        {/* <div>debug: {newName}</div> */}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App