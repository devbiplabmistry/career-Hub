import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="container flex justify-evenly">
                <h1>Carrer Hub</h1>
                <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied jobs">Applied Jobs</Link>
                    <Link to="blog">Blog</Link>
                </ul>
                <button>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;