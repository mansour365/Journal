import React from 'react';

function Body(props){
    return(
        <>
            <div class = "text-title">
                <h1>{props.title}</h1>
            </div>

            <div class = "text-body">
                <p>{props.text}</p>
            </div>
        </>
    );
}

export default Body;