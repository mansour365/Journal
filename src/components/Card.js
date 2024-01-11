import React from 'react';
import CardImg from './CardImg';
import CardBody from './CardBody';
import EditDateBtn from './buttons/EditDateBtn';

function Card(props){
    return (
        <div className = "card">  

                <div className = "image-section">
                    <CardImg journalImg = {props.entryObj.journalImg}/>
                </div>

                <div className = "text-section">
                    <CardBody title={props.entryObj.title} text={props.entryObj.body}/>
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