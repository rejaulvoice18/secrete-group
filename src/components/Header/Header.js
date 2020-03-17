import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Selection of Secrete Group</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/secrete">Secrete-Group-Overview</a>
            </nav>
        </div>
    );
};

export default Header;