import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const AboutUs = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {userData && (
          <>
            {/* Title Section */}
            <div className="about-us-title-section">
              <h1 className="about-us-main-title">
                Meet {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
              </h1>
              <p className="about-us-subtitle">{userData.email}</p>
            </div>

            {/* Introduction Section */}
            <div className="about-me-section">
              <h2 className="about-me-heading">About Me</h2>
              <p className="about-me-text">
                Hello! My name is {`${userData.name.first} ${userData.name.last}`} and I am {userData.dob.age} years old. I am passionate about technology and always eager to learn new things. Feel free to get in touch if you'd like to know more about my work or share ideas.
              </p>
            </div>

            {/* Details Section */}
            <div className="about-details-section">
              <div className="about-details-item">
                <span className="about-details-label">Phone:</span>
                <span className="about-details-value">{userData.phone}</span>
              </div>
              <div className="about-details-item">
                <span className="about-details-label">Cell:</span>
                <span className="about-details-value">{userData.cell}</span>
              </div>
            </div>

            {/* Address Section */}
            <div className="about-address-section">
              <h2 className="about-address-heading">Where I Live</h2>
              <p className="about-address-text">
                I live at {`${userData.location.street.number} ${userData.location.street.name},`} {userData.location.city}, {userData.location.state}, {userData.location.country} - {userData.location.postcode}.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutUs;