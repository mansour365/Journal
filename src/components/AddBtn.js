import React from 'react';

function AddBtn(){
    
    function handleClick(){
        alert("you clicked"); 
    }
    
    return (
        <div className="addBtn" type="button" onClick={handleClick}>
            <span className="material-symbols-outlined">add</span>
        </div>
    );
}

export default AddBtn;