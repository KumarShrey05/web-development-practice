import { useContext } from "react";
import { JobsDataContext } from "../context/JobsDataContext";
import JobCard from "../components/JobCard";

function SavedJobs() {

  const { savedJobs } = useContext(JobsDataContext);

  return (
    <div>
      <h1>Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        savedJobs.map((job) => (
          <JobCard
            key={job.id}
            jobs={job}
          />
        ))
      )}
    </div>
  );
}

export default SavedJobs;
