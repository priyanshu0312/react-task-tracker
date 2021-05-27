import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Jun 5th at 3:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Meeting at Office',
      day: 'Jun 6th at 9:30am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Going to GYM',
      day: 'Jun 7th at 6:30pm',
      reminder: true,
    },
  ])
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    )
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
    // <div className="App">
    //  <h1>Hello From React</h1>
    //  <h2>Hello {name} { x ? 'yes' : 'no'}</h2>
    // </div>
  )
}

export default App

// import logo from './logo.svg'
// import './App.css'
// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(15)
//   function decrementValue() {
//     setCount(count - 2)
//   }
//   function incrementValue() {
//     setCount(count + 2)
//   }
//   if (count == 27) {
//     return <h1>Crashed!</h1>
//   }

//   const name = 'Priyanshu'
//   const x = true
//   return (
//     <div className="container">
//       <h1>Hello From React</h1>

//       <button onClick={decrementValue}>-</button>
//       <h3>{count}</h3>
//       <button onClick={incrementValue}>+</button>
//     </div>
//     // <div className="App">
//     //  <h1>Hello From React</h1>
//     //  <h2>Hello {name} { x ? 'yes' : 'no'}</h2>
//     // </div>
//   )
// }

// export default App
