import React, {useState} from 'react';

/*Import the css*/
import './App.css';

/*Import components*/
import FilterBtn from './components/buttons/FilterBtn';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';

/*Import previously saved array of object*/
import { savedEntries } from './journalData';


export default function App() {

  const [newTask, setNewTask] = useState({});     //an object called newtask

  const handleChange = ({target}) =>{          //Activated when interacting with new Task area
    const {name, value} = target;
    setNewTask((prev)=>({...prev, id: Date.now(), [name]:value}));
  };

  const [allTasks, setAllTasks] = useState([]);   //an array called allTasks, by default array is empty

  const handleSubmit = (event) => {           //Activated when click on done button
    event.preventDefault();
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({}); //Empty the current task object
  }

  return (
    <div className="App">

      <div className = "title-section">
        <div id="title">Journal</div>
        <FilterBtn />
      </div>

      {/*Need to check json file, convert to array "saved entries" */}
      
      {/*Start by creating a json file with the information contained in savedentries*/}
      {/*using javascript convert json to array*/}
      {/*display the array*/}

      {/* when new task is made, add it to saved entries array, then convert the saved entries array to json file*/}

      {/*Takes 3 arguments, the current task object, handleChange() and handleSubmit() */}
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit}/>

      {/*Display new journal entries on top of older entries*/}
      <TasksList allTasks={allTasks} />

      {/*Render the previous entries located in the savedEntries array*/}
      <TasksList allTasks={savedEntries}></TasksList>

    </div>
  );
}


