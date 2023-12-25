import React from 'react';
import CreateCard from './CreateCard';

function AddBtn(){
    
    function handleClick(){
        <CreateCard />
    }
    
    return (<div className="addBtn" type="button" onClick={handleClick}>
                    <span className="material-symbols-outlined">add</span>
           </div>);
}

export default AddBtn;