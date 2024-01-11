import React, {useState} from "react";

import BookmarkBtn from "./buttons/BookmarkBtn";

import TodayDate from "./TodayDate";
import { entries } from "../journalData";



export default function NewEntry(){
    const [entry, setEntry] = useState({}); //default value is empty object

    const handleChange = ({target}) => {
        const {name, value} = target;
        setEntry(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        entries.push(entry);
    }


    return(
        <div className = "new-entry">

            <div className = "header">
                <BookmarkBtn/>
                <div className = "header-date"><TodayDate /></div>
                <button onClick={handleSubmit}>Done</button>
            </div>

            <div className="entry-content">

                <input 
                    value = {entry.title}
                    name = "title"
                    type = "text"
                    placeholder = "Journal Title"
                    onChange={handleChange}
                    className = "entry-title"
                />

                <textarea
                    value = {entry.body}
                    name = "body"
                    type = "text"
                    placeholder = "Start writing..."
                    onChange={handleChange}
                    className="body-class"
                />
               
            </div>
        </div>
    );
}
