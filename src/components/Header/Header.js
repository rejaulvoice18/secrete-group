import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/secrete">Secrete-Group-Overview</a>
            </nav>
        </div>
    );
};

export default Header;