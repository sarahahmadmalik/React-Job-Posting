import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-[75vh] px-4 sm:px-6 md:px-8">
      <FaExclamationTriangle className="text-yellow-400 text-6xl sm:text-7xl md:text-8xl mb-4" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        404 Not Found
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-5">
        This page does not exist.
      </p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-4 py-2 sm:px-5 sm:py-3 mt-4 text-sm sm:text-base md:text-lg"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
