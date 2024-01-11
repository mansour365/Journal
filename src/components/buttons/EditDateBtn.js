import React from 'react';

function EditDateBtn(){

    function handleClick(){
        alert("edit date is an upcomming feature");
    }

    return(
        <div className="editDateBtn" type="button" onClick={handleClick}>
            <span className="material-symbols-outlined" id="more_horiz">more_horiz</span>
        </div>
    );
}

export default EditDateBtn;