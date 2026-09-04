import { useState, useContext } from "react"
import { JobsDataContext } from "../context/JobsDataContext";

function SearchJobs() {

    const [search, setSearch] = useState("");
    const { jobData, setFilteredJobs } = useContext(JobsDataContext)

    const handleSearch = (e) => {
        e.preventDefault();

        const filterJobs = jobData.filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredJobs(filterJobs)
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text"
                    placeholder="Search Jobs..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }} />

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchJobs
