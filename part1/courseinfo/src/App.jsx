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
      {parts.map(part => {
        return <Part key={part.id} part={part.name} exercises={part.exercises} />
      })}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      <Part part={props.parts[3].name} exercises={props.parts[3].exercises} />
    </>
  )
}

const Part = ({part, exercises}) => {
  return (
    <>
      <p>{part} {exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      {/* <p style={{ fontWeight: 'bold' }}>total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises + props.parts[3].exercises} exercises</p> */}
      <p style={{ fontWeight: 'bold' }}>total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises </p>
    </>
  )
}
export default App