import React, {useState} from "react";

import BookmarkBtn from "./buttons/BookmarkBtn";

import TodayDate from "./TodayDate";
import { entries } from "../journalData";



export default function NewTask({newTask, handleChange, handleSubmit}){

    /*Give entry the current date*/
    newTask.date = <TodayDate />

    return(
        <form onSubmit={handleSubmit} className = "new-entry">

            <div className = "header">
                <BookmarkBtn/>
                <div className = "header-date"><TodayDate /></div>
                <button type="submit">Done</button>
            </div>

            <div className="entry-content">

                <input className = "entry-title"
                    name = "title"
                    placeholder = "Journal Title"
                    value = {newTask.title || ""}
                    onChange={handleChange}
                />

                <textarea className="body-class"
                    name = "body"
                    placeholder = "Start writing..."
                    value = {newTask.body || ""}
                    onChange={handleChange}
                />

                
               
            </div>
        </form>
        
        
    );
}
