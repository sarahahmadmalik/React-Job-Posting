import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const ContactForm = ({ onSubmit, loading, successMessage, errorMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  console.log(successMessage)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <label htmlFor="email" className="block text-gray-600 font-medium">
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
        <label htmlFor="message" className="block text-gray-600 font-medium">
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
  );
};

export default ContactForm;
