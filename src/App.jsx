import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import Wrapper from "./layouts/Wrapper";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AddJobs from "./pages/AddJobs";
import "./App.css"

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch(
      "https://jobs-server-api-ashy.vercel.app/api/jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      }
    );
    return;
  };
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />

          <Route path="/jobs/:id" element={<JobPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/add-job"
            element={<AddJobs addJobSubmit={addJob} />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
