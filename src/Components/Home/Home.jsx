import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';
const Home = () => {
    const jobs =useLoaderData();
    console.log(jobs);
    return (
        <div>
            <Banner></Banner>
          <div className='container content '>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className='grid grid-cols-4 jobs mt-16'>
                {
                    jobs.map(job=><JobList
                    key={job.id}
                    job={job}
                    >
                    </JobList>)
                }
            </div>
          </div>
        </div>
    );
};

export default Home;