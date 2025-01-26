import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi"; 
import Spinner from "../components/Spinner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || name.length < 2) {
      setErrorMessage("Name must be at least 2 characters long.");
      setSuccessMessage("");
      return;
    }

    if (!email || !message) {
      setErrorMessage("All fields are required.");
      setSuccessMessage("");
      return;
    }

    setErrorMessage(""); 
    setLoading(true);

    setTimeout(() => {
      setLoading(false); 
      setSubmitted(true);
      setSuccessMessage(
        `Thank you, ${name}, your message has been successfully submitted.`
      );
    }, 2000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {!submitted && (
          <h1 className="contact-title">
            Contact Us
          </h1>
        )}

        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}

        {successMessage && (
          <div className="success-message">
            <FiCheckCircle className="success-icon" />
            <p>{successMessage}</p>
          </div>
        )}

        {!submitted && !loading && (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="required-mark">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required-mark">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}

        {loading && <Spinner loading={loading} />}
      </div>
    </section>
  );
};

export default ContactUs;