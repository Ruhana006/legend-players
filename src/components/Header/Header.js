import React from 'react';
import "./Header.css";
import * as ReactBootStrap from "react-bootstrap"
const Header = () => {
    return (
        <div>
            <div className="header">
            <h1>FiFa Ultimate-Team</h1>
                <ReactBootStrap.Navbar variant="dark" bg="dark" expand="lg">
                    <ReactBootStrap.Nav className="ml-auto ">
                        <ReactBootStrap.Nav.Link href="/top players">Top Players</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/ratings">Ratings</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/clubs">Clubs</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Form inline>
                        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar>
            </div> 
        </div>
    );
};

export default Header;