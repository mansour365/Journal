import React from 'react';
import Header from './Header';
import Body from './Body';
import TodayDate from './TodayDate';
import EditDateBtn from './EditDateBtn';

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
                        {props.entryObj.date}  
                    </div>

                    <EditDateBtn />
                </div>

        </div>
    ); 
}

export default Card;