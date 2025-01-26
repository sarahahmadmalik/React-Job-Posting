import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

const Home = () => {
  return (
    <div className="home-container">
      <div className="bg-img ">
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
      </div>
    </div>
  );
};
export default Home;
