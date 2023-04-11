import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import Savejob from '../Savejob/Savejob';

const AppliedJob = () => {
    const jobs=useLoaderData()

    const [saveJob,setSavejob]=useState([])

    useEffect( () =>{
        const appliedJob=getShoppingCart()
        let saveJob=[]
        for(const id in appliedJob){
            const addedJobs = jobs.find(job => job._id === id)
            saveJob.push(addedJobs)
        }
       setSavejob(saveJob)
    }, [])
   
    return (
        <div>
           <div>
            {
                saveJob.map(job=><Savejob key={job._id} job={job}></Savejob>)
            }
           </div>
        </div>
    );
};

export default AppliedJob;