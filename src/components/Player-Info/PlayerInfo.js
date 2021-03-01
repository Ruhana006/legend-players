import React from 'react';
import './PlayerInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons'

const PlayerInfo = (props) => {
    const {name,image,club,salary} =props.player
    
    return (
        <div className="display-players">
            <div className="player-img">
            <img style={{height:'250px',width:'400px'}} src={image}></img>
            </div>
            <div className="player-details">
                <h1>{name}</h1>
                <h4>Club: {club}</h4>
                <h4>Salary: ${salary} million</h4>
                <button className='add-btn' onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />Add Player</button>
            </div>
        </div>
    );
};

export default PlayerInfo;