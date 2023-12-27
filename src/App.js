import React from 'react';
/*Import the css*/
import './App.css';
/*Import the array of Journal data*/
import {entries} from './journalData';
/*Import components*/
import AddBtn from './components/AddBtn';
import Card from './components/Card';


function App() {
  return (
    <div className="App">

      <div id="title">Journal</div>

      <div id = "addBtn"> <AddBtn /> </div>

      {/*map objects from journalData put each object into an instance of Card*/}
      {entries.map(entry => <Card entryObject = {entry}/> )}

      
    </div>
  );
}

export default App;
