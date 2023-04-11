import React from 'react';
import './JobList.css'
const JobList = ({job}) => {
    const {name,picture,available,id}=job
    return (
      <div className='container sm:w-100'>
          <div className=' list'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>{available}</h4>    
        </div>
      </div>
    );
};

export default JobList;