import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import Savejob from '../Savejob/Savejob';
import './Appliedjob.css'
import Remote from '../Remote/Remote';

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

const [remotes,setRemotes]=useState([])
    const handleRemote =()=>{   
        const remote=saveJob.filter(remote=>remote.status ==='remote' ) 
        const remot=[...remotes,remote]  
        setRemotes(remot) 
        
    }
  

    return (
        <div>
           <div>
            <h3 className='text-center title'>Applied Jobs</h3>
            <div className='mt-10'>
                <button onClick={handleRemote} className='fulltime mr-5 absolute right-36 '>Remote</button>
                <button className='fulltime absolute right-5'>Full Time</button>
            </div>
            {
                saveJob.map(job=><Savejob key={job._id} job={job}></Savejob>)
            }
           
           </div>
        </div>
    );
};

export default AppliedJob;