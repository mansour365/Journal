import React from 'react';
import BookmarkBtn from './buttons/BookmarkBtn';
import TodayDate from './TodayDate';
import DoneBtn from './buttons/DoneBtn';

function CreateCard(){
    return (<div className = "edit-card">  
                <div className = "top-date">
                    <BookmarkBtn /> <TodayDate /> <DoneBtn />
                </div>
                <div className = "edit-title">
                    title
                </div>
                <div className = "edit-text">
                    text
                </div>
                <div className = "edit-images">
                    add images
                </div>
            </div>); 
}

export default CreateCard;