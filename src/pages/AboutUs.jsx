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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="text-center text-xl text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex justify-center items-center bg-indigo-50 min-h-screen pl-6 pr-6 pt-6 pb-[6rem]">
      <div className="w-full p-8">
        {userData && (
          <>
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">
                Meet {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
              </h1>
              <p className="text-xl text-gray-600 italic mt-2">{userData.email}</p>
            </div>

            {/* Introduction Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
              <p className="text-lg text-gray-600">
                Hello! My name is {`${userData.name.first} ${userData.name.last}`} and I am {userData.dob.age} years old. I am passionate about technology and always eager to learn new things. Feel free to get in touch if you’d like to know more about my work or share ideas.
              </p>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex justify-start items-center">
                <span className="font-medium text-gray-600">Phone:</span>
                <span className="text-lg text-gray-700 ml-2">{userData.phone}</span>
              </div>
              <div className="flex justify-start items-center">
                <span className="font-medium text-gray-600">Cell:</span>
                <span className="text-lg text-gray-700 ml-2">{userData.cell}</span>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where I Live</h2>
              <p className="text-lg text-gray-600">
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
