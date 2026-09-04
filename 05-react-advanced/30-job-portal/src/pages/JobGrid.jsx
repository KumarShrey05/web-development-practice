import { useContext } from "react"
import { JobsDataContext } from "../context/JobsDataContext"
import JobCard from "../components/JobCard"
import SearchJobs from "../components/SearchJobs"

function JobGrid() {

  const { filteredJobs } = useContext(JobsDataContext)
  return (
    <div>
      <SearchJobs />

      {filteredJobs.map((jobs) => (
        <JobCard key={jobs.id} jobs={jobs} />
      ))}
    </div>
  )
}

export default JobGrid
