import React from 'react';
import EditDateBtn from './buttons/EditDateBtn';
/*Import the array of Journal data*/
import {entries} from '../journalData';
import Card from './Card';
import CardImg from './CardImg';

export default function TasksList({allTasks}){
    return(
        <>
            {allTasks.map(({journalImg, title, body, date, id})=> (

                <div className = "card" key={id}>

                    <div className = "image-section">
                        <img src={journalImg}></img>
                    </div>


                    <div className = "text-section">
                        <div className = "text-title">
                            {title}
                        </div>

                        <div className = "text-body">
                            {body}
                        </div>
                    </div>

                    <div id = "dateSection">
                        <div id = "date">
                            {date}
                        </div>

                        <EditDateBtn />
                    </div>
                        
                </div>
            ))}
        </>
    );
}