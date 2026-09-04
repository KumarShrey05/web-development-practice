import { useParams } from "react-router-dom"
import { useContext } from "react"
import { JobsDataContext } from "../context/JobsDataContext"

function JobDetails() {

    const { getJobById } = useContext(JobsDataContext)

    const { id } = useParams();
    const job = getJobById(id);

    if (!job) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <p>{job?.category.name}</p>
            <h1>{job?.title}</h1>
            <img
                src={job?.company.logo_url}
                alt={`${job.company.name} logo`}
                width="50"
            />
            <h3><a href={job.company.website || job.company.url}>{job?.company.name}</a></h3>
            <p>{job?.location}</p>
            <p>{job?.salary_text}</p>
            <p>{job?.type}</p>
            <p>{job?.posted_at}</p>
            <div dangerouslySetInnerHTML={{ __html: job?.description }} />



        </div>
    )
}

export default JobDetails
