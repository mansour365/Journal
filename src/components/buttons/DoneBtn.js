import React from 'react';

function DoneBtn(){
    const ShowCards = () => {
        alert("Hello");
    }
    return (<div className="doneBtn" type="button" onClick={ShowCards}>
                    Done
           </div>);
}

export default DoneBtn;