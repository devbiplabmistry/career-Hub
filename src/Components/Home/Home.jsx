import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';
import FeatureJob from '../FeatureJob/FeatureJob';
const Home = () => {
  const jobs = useLoaderData();
  const [featurejob, setFeaturejobs] = useState([]);
  useEffect(() => {
    fetch('Feature.json')
    .then(res => res.json())
    .then(data => setFeaturejobs(data))
  }, [])
  

  const [feature, setFeture] = useState([])
  useEffect(() => {
    const f = featurejob.slice(0, 4);
    setFeture(f)
  }, [featurejob])


  const handleOnClick = () => {
    const p =featurejob;
    setFeture(p)
  }
  return (
    <div>
      <Banner></Banner>
      <div className='container content '>
        <h2>Job Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 jobs mt-16'>
          {
            jobs.map(job => <JobList
              key={job.id}
              job={job}
            >
            </JobList>)
          }
        </div>
      </div>

      <div className='container f  mt-10 '>
        <h2>Featured Jobs</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='md:grid grid-cols-2 gap-10 '>
          {
            feature.map(fjob => <FeatureJob
              key={fjob._id}
              fjob={fjob}
            ></FeatureJob>)
          }
        </div>
        <button onClick={handleOnClick} className='seeAlljobs'>See All Jobs</button>
      </div>
    </div>
  );
};

export default Home;