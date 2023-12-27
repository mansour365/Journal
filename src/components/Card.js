import React from 'react';
import Header from './Header';
import Body from './Body';
import TodayDate from './TodayDate';

function Card(props){
    return (
        <div className = "card">  

                <div className = "image-section">
                    <Header journalImg = {props.entryObj.journalImg}/>
                </div>

                <div className = "text-section">
                    <Body title={props.entryObj.title} text={props.entryObj.text}/>
                </div>

                <div id = "dateSection">
                    <div id = "date">
                        <TodayDate />  
                    </div>
                </div>

        </div>
    ); 
}

export default Card;