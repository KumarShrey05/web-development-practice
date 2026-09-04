import { useParams } from "react-router-dom"
import { useContext } from "react"
import { JobsDataContext } from "../context/JobsDataContext"

function JobDetails() {

    const {
        getJobById,
        savedJobs,
        setSavedJobs,
        appliedJobs,
        setAppliedJobs
    } = useContext(JobsDataContext)

    const { id } = useParams();
    const job = getJobById(id);

    if (!job) {
        return <h2>Loading...</h2>;
    }

    const isSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    const isApplied = appliedJobs.some((appliedJob) => appliedJob.id === job.id);


    const handleSave = () => {
        if (isSaved) {
            setSavedJobs(
                savedJobs.filter(
                    (savedJob) => savedJob.id !== job.id
                )
            );
        } else {
            setSavedJobs([...savedJobs, job]);
        }
    };

    const handleApply = () => {
        if (!isApplied) {
            setAppliedJobs([...appliedJobs, job]);
        }
    };




    return (
        <div>
            <p>{job?.category.name}</p>
            <div>
                <button onClick={handleSave}>
                    {isSaved ? "Saved" : "Save"}
                </button>

                <a
                    href={job?.apply_url}
                    onClick={handleApply}
                >
                    {isApplied ? "Applied" : "Apply"}
                </a>

            </div>
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
