
import './JobDetails.css'
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from '../../utilities/fakedb';
const JobDetails = () => {
    const params = useParams()
    const data = useLoaderData()
    const [datas, setdatas] = useState([])
    useEffect(() => {
        const jobData = data.find(feature => feature._id === params.detailsId)
        setdatas(jobData)
    }, [])

    const handleClick = ()=>{
        const addDb=addToDb(datas._id)
    }
  

    return (
        <div className="container ">
            <div className="text-center">
                <h3 className='title mt-10'>Job Details</h3>
            </div>
            <div className="Details-container flex mt-20 gap-20">
                <div className="description">
                    <p><span>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

                    <p>
                        Job Responsibility: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>
                    <h4>Educational Requirements:</h4>
                    <p>Bachelor degree to complete any reputational university.</p>
                    <h4>Experiences</h4>
                    <p>2-3 Years in this field.</p>
                </div>
                <div>
                    <div className="apply">
                        <h2>Job Details</h2>
                        <p> Salary:{datas.sallary}</p>
                        <p>Job Title :{datas.name}</p>
                        <h2>Contact Information</h2>
                        <p><span>Phone </span>:{datas.phone}</p>
                        <p><span>Email</span> :{datas.email}</p>
                        <p><span>Address</span>:{datas.address}</p>
                    </div>
                    <button onClick={handleClick} className='btn'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;