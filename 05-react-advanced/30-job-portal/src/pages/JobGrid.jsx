import { useContext } from "react"
import { JobsDataContext } from "../context/JobsDataContext"
import JobCard from "../components/JobCard"

function JobGrid() {

    const {jobData} = useContext(JobsDataContext)
  return (
    <div>
        {jobData.map((jobs)=> (
            <JobCard key={jobs.id} jobs={jobs}/>
        ))}
    </div>
  )
}

export default JobGrid
