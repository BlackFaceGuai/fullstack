import {useEffect, useState } from 'react'
import phoneBookService from './services/phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  
  const hook = () => {
    console.log('effect')
    phoneBookService.getAll()
      .then(initialData => {
        console.log('promise fulfilled')
        setPersons(initialData)
      })
  }
  useEffect(hook, [])
  console.log('render', persons.length, 'persons')
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const add = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }
        phoneBookService.updatePerson(person.id, changedPerson)
          .then(returnedData => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedData))
          })
      }
    }
    else
    {
      const personObject = {
        name: newName,
        number: newNumber
      }
      phoneBookService.create(personObject)
        .then(returnedData => {
          setPersons(persons.concat(returnedData))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    phoneBookService.deletePerson(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm add={add} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h3>Numbers</h3>
      <Person filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App