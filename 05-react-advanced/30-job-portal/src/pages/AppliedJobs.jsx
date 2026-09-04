import { useContext } from "react";
import { JobsDataContext } from "../context/JobsDataContext";
import JobCard from "../components/JobCard";

function AppliedJobs() {

    const { appliedJobs } = useContext(JobsDataContext);

    return (
        <div>
            <h1>Applied Jobs</h1>

            {appliedJobs.length === 0 ? (
                <p>No applied jobs yet.</p>
            ) : (
                appliedJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        jobs={job}
                    />
                ))
            )}
        </div>
    );
}

export default AppliedJobs;
