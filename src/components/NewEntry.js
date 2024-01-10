import React, {useState} from "react";
import TodayDate from "./TodayDate";
import BookmarkBtn from "./BookmarkBtn";



export default function NewEntry(){
    const [entry, setEntry] = useState({}); //default value is empty object

    const handleChange = ({target}) => {
        const {key, value} = target;
        setEntry(prev => ({...prev, [key]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("need to transfer this new object data to the array in the journalData.js file");
    }


    return(
        <div class = "new-entry">

            <div class = "header">
                <BookmarkBtn/>
                <div class = "header-date"><TodayDate /></div>
                <button onClick={handleSubmit}>Done</button>
            </div>

            <div class="entry-content">

                <input 
                    value = {entry.title}
                    name = "title"
                    type = "text"
                    placeholder = "Journal Title"
                    onChange={handleChange}
                    class = "entry-title"
                />

                <textarea
                    value = {entry.body}
                    name = "body"
                    type = "text"
                    placeholder = "Start writing..."
                    onChange={handleChange}
                    class="body-class"
                />
               
            </div>
        </div>
    );
}
