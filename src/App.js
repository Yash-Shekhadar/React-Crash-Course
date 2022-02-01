import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from "react";
import Task from './components/Task';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "NN Assignment",
      day: "Jan 28 11.59 at pm",
      reminder: true,
    },
    {
      id: 2,
      text: "MLG Paper reading",
      day: "Jan 29 11.00 at pm",
      reminder: true,
    },
    {
      id: 3,
      text: "SE Project",
      day: "Jan 28 11.59 at pm",
      reminder: true,
    },
  ])


  //Add task
  const addTask = (task) =>
  {
    // console.log(task);
    const id = Math.floor(Math.random() *10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }
  // Delete Task
  const delTask = (id) =>
  {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle Reminder
  const toggleReminder = (id) =>
  {
    // console.log(id);
    setTasks(
      tasks.map((task) => 
      task.id===id ? {...task, reminder:!task.reminder} : task));
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

// class App extends React.Component
// {
//   render()
//   {
//     return <h1>Hello from a class</h1>
//   }
// }
export default App;
