import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/JobListing.css';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="job-listing">
      <div className="job-listing-content">
        <div className="job-listing-header">
          <div className="job-type">{job.type}</div>
          <h3 className="job-title">{job.title}</h3>
        </div>

        <div className="job-description">{description}</div>

        <button 
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="description-toggle"
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className="job-salary">{job.salary} / Year</h3>

        <div className="job-divider"></div>

        <div className="job-footer">
          <div className="job-location">
            <FaMapMarker className="location-icon" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="read-more-link"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;