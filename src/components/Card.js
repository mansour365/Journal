import React from 'react';
import Header from './Header';
import Body from './Body';
import EditDateBtn from './buttons/EditDateBtn';

function Card(props){
    return (
        <div className = "card">  

                <div className = "image-section">
                    <Header journalImg = {props.entryObj.journalImg}/>
                </div>

                <div className = "text-section">
                    <Body title={props.entryObj.title} text={props.entryObj.body}/>
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