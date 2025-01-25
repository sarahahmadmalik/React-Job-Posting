import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (!job) {
    return <p className="text-red-500 text-center">Job not found!</p>;
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6 index">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50 min-h-screen">
        <div className="container m-auto pt-10 pb-[7rem] px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job?.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job?.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job?.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job?.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job?.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job?.company?.name}</h2>

                <p className="my-2">{job?.company?.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job?.company?.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job?.company?.contactPhone}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;
