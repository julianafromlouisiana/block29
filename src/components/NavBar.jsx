import React from 'react';
import { Link } from 'react-router-dom';



export default function NavBar() {
    return(
        <div className="nav-bar">
            <h1>Nav Bar</h1>
            <Link to="/all-players">TO HOME</Link>
            
        </div>
    );
}

