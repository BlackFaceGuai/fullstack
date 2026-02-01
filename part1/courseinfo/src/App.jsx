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
  return <h1>{props.name}</h1>
}

const Content = (props) => {
  console.log("Content",props);
  
  return (
    <div>
      {props.parts.map(part => {
        return <p key={part.id}>{part.name} {part.exercises}</p>
      })}
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Total exercises: {calculateTotal(props.parts)}</p>
  )
}

const calculateTotal = (parts) => {
  return parts.reduce((sum, part) => sum + part.exercises, 0)
}

const TotalOld = (props) => {
  return (
    <>
      {/* <p style={{ fontWeight: 'bold' }}>total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises + props.parts[3].exercises} exercises</p> */}
      <p style={{ fontWeight: 'bold' }}>total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises </p>
    </>
  )
}
export default App