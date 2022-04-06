// Hook
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import About from "./components/About";



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  // now part of app/global level state
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []); // Dependency array - if any element in the array changes - run the function fetchTasks
  
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'GET'
    })
    return await response.json();
  }

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();

    return data
  }

  const addTask = async (task) => {
    // Creating id manually - normally DB/BE would provide this functionality
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    const response = await fetch(`http://localhost:5000/tasks/`, 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await response.json()
    setTasks([...tasks, data]);
  }

  // Unreal function!! 
  const deleteTask = async (id) => { 
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });
    const data = await response.json();

    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  } 

  return (
    <Router>
      <div 
        className="container">
        <Header 
          title='Task Tracker'
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} /> : 'No tasks to show'}
        <Routes>
            <Route
              path='/about'
              exact
              element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
