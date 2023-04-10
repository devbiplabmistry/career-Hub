import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';
import FeatureJob from '../FeatureJob/FeatureJob';
const Home = () => {
  const jobs = useLoaderData();
  const [fjobs, setFjobs] = useState([]);

  useEffect(() => {
    fetch('Feature.json')
      .then(res => res.json())
      .then(data => setFjobs(data))
  }, [])

  return (
    <div>
      <Banner></Banner>
      <div className='container content '>
        <h2>Job Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid grid-cols-4 jobs mt-16'>
          {
            jobs.map(job => <JobList
              key={job.id}
              job={job}
            >
            </JobList>)
          }
        </div>
      </div>

      <div className='grid grid-cols-2 container gap-10 mt-10'>
        {
          fjobs.map(fjob=><FeatureJob
            key={fjob._id}
            fjob={fjob} 
          ></FeatureJob>)
        }
      </div>



    </div>
  );
};

export default Home;