import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import ViewAllJobs from "./ViewAllJobs";
import "./styles/JobListings.css";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "https://jobs-server-api-ashy.vercel.app/api/jobs/?_limit=3"
        : "https://jobs-server-api-ashy.vercel.app/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="job-listings ">
      <div className="job-listings-container">
        <h2 className="job-listings-title">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <div className="job-listings-grid">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
            <ViewAllJobs />
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;