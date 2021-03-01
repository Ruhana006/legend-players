import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
           <h1>FiFa Ultimate-Team</h1>
           <nav><a href="/top Players">Top Players</a>
           <a href="/ratings">Ratings</a>
           <a href="/clubs">Clubs</a>
           </nav> 
        </div>
    );
};

export default Header;