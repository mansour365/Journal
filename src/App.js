import React, {useState} from 'react';

/*Import the css*/
import './App.css';

/*Import components*/
import FilterBtn from './components/buttons/FilterBtn';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';


export default function App() {

  //Create an array of objects


  

  const [newTask, setNewTask] = useState({});

  const handleChange = ({target}) =>{
    const {name, value} = target;
    setNewTask((prev)=>({...prev, id: Date.now(), [name]:value}));
  };

  const [allTasks, setAllTasks] = useState([]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  }

  return (
    <div className="App">

      <div className = "title-section">
        <div id="title">Journal</div>
        <FilterBtn />
      </div>

      <NewTask 
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <TasksList allTasks={allTasks} />

    </div>
  );
}


