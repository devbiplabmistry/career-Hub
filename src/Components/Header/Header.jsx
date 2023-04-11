import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="container md:flex justify-between align-middle">
                <h1 className='sm:text-center'>Jobs Hub</h1>
                <ul className='menu sm:text-center'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied jobs">Applied Jobs</Link>
                    <Link to="blog">Blog</Link>
                </ul>
                <button className='sm:hidden md:block'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;