import React from 'react';
/*Import the array of Journal data*/
import {entries} from '../journalData';
import Card from './Card';

export default function DisplayCards(){
    return(
        <>
            {entries.map(entry => <Card entryObj = {entry}/> )}
        </>
    );
}