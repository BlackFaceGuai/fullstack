const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        return <Course key={course.id} course={course}/>
      })}
    </div>
  )
}

const Course = (props) => {
  const course = props.course;
  console.log("course:", course);
  const parts = course.parts;
  return (
    <>
      <Header name={course.name} />
      {parts.map(part => {
        console.log("part:", part);
        return <Content key={part.id} name={part.name} exercises={part.exercises} />
      })}
      <Total parts={parts} />

    </>
  )
}

const Header = (props) => {
  console.log("Header props:", props);
  return <h2>{props.name}</h2>
}

const Content = (props) => {
  console.log("Content",props);
  
  return (
    <p key={props.id}>{props.name} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p style={{ fontWeight: 'bold' }}>total of {calculateTotal(props.parts)} exercises</p>
  )
}

const calculateTotal = (parts) => {
  return parts.reduce((sum, part) => sum + part.exercises, 0)
}

export default App