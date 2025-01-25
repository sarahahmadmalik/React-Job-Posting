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
    <section className="flex justify-center items-center min-h-screen p-6 bg-indigo-50">
      <div className="max-w-md w-full bg-white p-8 shadow-xl rounded-xl">
        {!submitted && (
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Contact Us
          </h1>
        )}

        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">
            <p>{errorMessage}</p>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 text-green-500 text-center flex flex-col items-center justify-center space-y-2">
            <FiCheckCircle className="text-3xl text-green-600" />
            <p>{successMessage}</p>
          </div>
        )}

        {!submitted && !loading && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out"
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
