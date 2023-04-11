import React from 'react';
import { useParams } from 'react-router-dom';

const Remote = () => {

    const data =useParams()
    console.log(data);
   
  
    return (
        <div>
              {/* <div className='container text-center job '>
            <div className='save-job-container flex gap-x-24'>
                <div className="save-job-logo">
                    <img src={picture} alt="" />
                </div>
                <div className="save-job-content ">
                    <h3 className='mt-20'>{name}</h3>
                    <p>{company}</p>
                    <button>Remote</button>
                    <button>Full Time</button>
                    <p>{address} <span>{sallary}</span></p>
                </div>
             <div>
             <button className="save-job-btn">View Details</button>
             </div>
            </div> 
        </div> */}
        </div>
    );
};

export default Remote;