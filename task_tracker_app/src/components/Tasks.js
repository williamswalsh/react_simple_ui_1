import Task from "./Task";

// const Tasks = ({ tasks, onDelete }) => {
  // Now part of component state
  // state is immutable - must setTasks
  // name of data tasks
  // function to update state: setTasks
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: 'Doctors Appointment',
  //     day: 'Feb 5th at 2:30pm',
  //     reminder: true
  //   },
  //   {
  //     id: 2,
  //     text: 'Meeting at School',
  //     day: 'Feb 6th at 1:30pm',
  //     reminder: true
  //   },
  //   {
  //     id: 3,
  //     text: 'Food Shopping',
  //     day: 'Feb 5th at 2:30pm',
  //     reminder: false
  //   }
  // ]);
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onToggle={onToggle}/>))}
    </>
  )
}
export default Tasks