import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch(
          `https://jobs-server-api-ashy.vercel.app/api/jobs/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch job data.");
        const data = await res.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, [id]);

  if (loading) return <Spinner loading={loading} />;
  if (error) return <p className="error-message-job">{error}</p>;

  if (!job) {
    return <p className="error-message-job">Job not found!</p>;
  }

  return (
    <div className="job-details-wrapper">
      <section>
        <div className="job-container">
          <Link to="/jobs" className="backbtn-link">
            <FaArrowLeft className="backbtn-link-icon" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="job-container">
          <div className="job-grid">
            <main>
              <div className="job-main-card">
                <div className="job-type">{job?.type}</div>
                <h1 className="job-title">{job?.title}</h1>
                <div className="job-location">
                  <FaMapMarker className="location-icon" />
                  <p>{job?.location}</p>
                </div>
              </div>

              <div className="job-description-card">
                <h3 className="section-heading">Job Description</h3>
                <p className="mb-4">{job?.description}</p>

                <h3 className="section-heading">Salary</h3>
                <p className="mb-4">{job?.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="company-info-card">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="company-name">{job?.company?.name}</h2>

                <p className="my-2">{job?.company?.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>
                <p className="contact-info">{job?.company?.contactEmail}</p>

                <h3 className="text-xl">Contact Phone:</h3>
                <p className="contact-info">{job?.company?.contactPhone}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobPage;
