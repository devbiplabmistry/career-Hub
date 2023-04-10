import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex container mt-20 banner'>
            <div className="banner-content ">
                <h1>One Step <br /> Closer To Your <br /><span> Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn'>Get Started</button>
            </div>
            <div className="banner-image">
           <img src='https://www.roberthalf.com/sites/default/files/2021-04/shutterstock_412257712-2.jpg' alt="" />
            </div>
        </div>
    );
};

export default Banner;