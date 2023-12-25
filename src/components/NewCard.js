import React from 'react';

function NewCard(){
    return (<div className = "card">  
                <div className = "image-section"></div>

                <div className = "text-section"></div>

                <div id = "dateSection">
                    <div id = "date">
                        <TodayDate />  
                    </div>
                </div>
            </div>); 
}

export default NewCard;