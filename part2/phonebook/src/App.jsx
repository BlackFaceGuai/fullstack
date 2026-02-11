import {useEffect, useState } from 'react'
import phoneBookService from './services/phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  
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

  const add = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }
        phoneBookService.updatePerson(person.id, changedPerson)
          .then(returnedData => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedData))
            setMessage({ text: `Updated ${newName}'s number`, type: 'success' })
            setTimeout(() => {
                setMessage(null)
              }, 5000)
          })
          .catch(error => {
            setMessage({ text: `Information of ${newName} has already been removed from server`, type: 'error' })
            setTimeout(() => {
                setMessage(null)
              },5000)
            setPersons(persons.filter(p => p.id != person.id))
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
          setMessage({ text: `Added ${newName}`, type: 'success' })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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
      .catch(error => {
        setMessage({ text: `Information of the person has already been removed from server`, type: 'error' })
        setTimeout(() => {
            setMessage(null)
          },5000)
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm add={add} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h3>Numbers</h3>
      <Person filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App