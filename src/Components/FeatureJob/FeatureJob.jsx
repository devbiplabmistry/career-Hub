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
            <h5>{address} <span>{sallary}</span></h5>
            <button>View Details</button> 
           </div>
            
        </div>
    );
};

export default FeatureJob;