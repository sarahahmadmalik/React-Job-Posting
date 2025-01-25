import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="bg-img ">
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
      </div>
    </div>
  );
};
export default HomePage;
