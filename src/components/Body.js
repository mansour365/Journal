import React from 'react';

function Body(props){
    return(
        <>
            <div class = "text-title">
                <>{props.title}</>
            </div>

            <div class = "text-body">
                <>{props.text}</>
            </div>
        </>
    );
}

export default Body;