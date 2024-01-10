import React, {useState} from "react";
import TodayDate from "./TodayDate";
import BookmarkBtn from "./BookmarkBtn";

/*Experimental*/
import {entries} from '../journalData';

export default function NewEntry(){
    const [entry, setEntry] = useState([entries]); //default value is empty object




    return(
        <div class = "new-entry">
            <div class = "header">
                <BookmarkBtn/>
                <div class = "header-date"><TodayDate /></div>
                <button>Done</button>
            </div>

            <div class="entry-content">

                <input 
                    class = "entry-title"
                    value = {entry.title}
                    name = "title"
                    type = "text"
                    placeholder = "Journal Title"
                />

                <textarea
                    class="body-class"
                    value = {entry.body}
                    name = "body"
                    type = "text"
                    placeholder = "Start writing..."
                />
               
            </div>
        </div>
    );
}
