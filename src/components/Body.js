import React from 'react';
import TodayDate from './TodayDate';

function Body(props){
    return(
        <>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <TodayDate />
        </>
    );

}

export default Body;