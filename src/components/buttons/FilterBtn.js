import React from 'react';

function FilterBtn(){

    function handleClick(){
        alert("filter feature comming soon.");
    }

    return(
        <div className="filterBtn" type="button" onClick={handleClick}>
            <span className="material-symbols-outlined" id="filter_list">filter_list</span>
        </div>
    );
}

export default FilterBtn;