import React from 'react';

function CardBody(props){
    return(
        <>
            <div className = "text-title">
                <>{props.title}</>
            </div>

            <div className = "text-body">
                <>{props.text}</>
            </div>
        </>
    );
}

export default CardBody;