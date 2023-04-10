import React from 'react';
import './Feature.css'

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
            <button className='view_details'>View Details</button> 
           </div>
            
        </div>
    );
};

export default FeatureJob;