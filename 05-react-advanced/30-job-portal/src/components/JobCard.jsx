import { Link } from "react-router-dom"

function JobCard({ jobs }) {
    return (
        <div>
            <p>{jobs.category.name}</p>

            <Link to={`/jobs/${jobs.title}/${jobs.id}`}>
                <h1>{jobs.title}</h1>
            </Link>

            <div>
                <img
                    src={jobs.company.logo_url}
                    alt={`${jobs.company.name} logo`}
                    width="50"
                />
                <p>{jobs.company.name}</p>
            </div>
        </div>
    )
}

export default JobCard
