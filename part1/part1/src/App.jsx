const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Test = () => {
  return (
    <>
      <p>
        test
      </p>
    </>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  const friends2 = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends2}</p>
      <h1>Greetings</h1>

      <Hello name="Maya" age={age + 10} />
      <Hello name={name} age={age} />
      <Test/>
    </div>
  )
}

export default App