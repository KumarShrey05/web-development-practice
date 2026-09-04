import { createContext, useEffect, useState } from "react";
import { getJobData } from "../apis/server";

export const JobsDataContext = createContext();

export function JobsDataProvider({ children }) {

  const [jobData, setJobData] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const getJobById = (id) => {
    return jobData.find((job) => job.id === id);
  }


  useEffect(() => {
    const fetchJobData = async () => {
      const data = await getJobData();
      setJobData(data);
      setFilteredJobs(data)
    }
    fetchJobData();
  }, [setJobData])


  return (
    <JobsDataContext.Provider
      value={{
        jobData,
        savedJobs,
        setSavedJobs,
        getJobById,
        filteredJobs,
        setFilteredJobs,
        appliedJobs,
        setAppliedJobs
      }}>
      {children}
    </JobsDataContext.Provider>
  )
}