import React from 'react';
import './Feature.css'
import { Link } from 'react-router-dom';

const FeatureJob = ({fjob}) => {
    const {_id,name,sallary,address,company,picture}=fjob
    return (
        <div className='container F_jobs'>
           <div className='f_job'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>{company}</h4>
            <button className='onsite'>Onsite</button>
            <button className='fulltime'>Full Time</button>
            <h5>{address} <span className='ml-5'>{sallary}</span></h5>
            <Link to={`/jobDetails/${_id}`}> <button className='view_details'>View Details</button> </Link>
           </div>
            
        </div>
    );
};

export default FeatureJob;