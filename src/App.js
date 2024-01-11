import React from 'react';

/*Import the css*/
import './App.css';

/*Import components*/
import FilterBtn from './components/buttons/FilterBtn';
import NewEntry from './components/NewEntry';
import DisplayCards from './components/DisplayCards';


function App() {
  return (
    <div className="App">

      <div className = "title-section">
        <div id="title">Journal</div>
        <FilterBtn />
      </div>

      <NewEntry />

      <DisplayCards />

    </div>
  );
}

export default App;
