import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="not-found-section">
      <FaExclamationTriangle className="warning-icon" />
      <h1 className="warning-title">404 Not Found</h1>
      <p className="warning-text">This page does not exist.</p>
      <Link to="/" className="back-link">
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
