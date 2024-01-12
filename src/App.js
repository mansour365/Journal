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

  const reversedList = savedEntries.reverse();

  const [newTask, setNewTask] = useState({});     //an object called newtask

  const handleChange = ({target}) =>{          //Activated when interacting with new Task area
    const {name, value} = target;
    setNewTask((prev)=>({...prev, id: Date.now(), [name]:value}));
  };

  const [allTasks, setAllTasks] = useState([]);   //an array called allTasks, by default array is empty
                                                  //need to set default to a previous array


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

      {/*Takes 3 arguments, the current task object, handle change function and handle submit function*/}
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit}/>



      {/*Journal Entry Cards to display */}
      
      {/*New entries go on top of older entries*/}
      <TasksList allTasks={allTasks} />

      
      {/*First render the previous data saved in the array*/}
      <TasksList allTasks={reversedList}></TasksList>

    </div>
  );
}


