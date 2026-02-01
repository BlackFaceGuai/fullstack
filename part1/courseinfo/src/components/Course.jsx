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

export default Course