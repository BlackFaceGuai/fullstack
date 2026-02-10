const Person = ({ filteredPersons, deletePerson }) => {
    return filteredPersons.map(
        (person) => <div key={person.name}>{person.name} {person.number}
        <button onClick={() => {
          if (confirm(`Delete ${person.name} ?`)) {
            deletePerson(person.id)
          }
        }}>Delete</button>
        </div>)
}

export default Person