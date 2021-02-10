import React from 'react';


const MissionCard = ({ title, text, id }) => {
    return (
        <div className={`mission__card grid-right-${id}`}>
            <header>{title}</header>
            <div>{text}</div>
        </div>
    )
}


export default MissionCard;