import React from 'react';
/*Import the css*/
import './App.css';
/*Import the array of Journal data*/
import {entries} from './journalData';
/*Import components*/
import AddBtn from './components/AddBtn';
import Card from './components/Card';
import FilterBtn from './components/FilterBtn';
import NewEntry from './components/NewEntry';


function App() {
  return (
    <div className="App">

      <div class = "title-section">
        <div id="title">Journal</div>
        <FilterBtn />
      </div>

      <NewEntry />

      <AddBtn />

      {/*map objects from journalData put each object into an instance of Card*/}
      {entries.map(entry => <Card entryObj = {entry}/> )}

    </div>
  );
}

export default App;
