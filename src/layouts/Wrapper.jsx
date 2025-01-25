import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Wrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tablet and below
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />
        <div className="flex mt-[4rem] mb-[10rem] md:my-[4rem] min-h-screen ">
          <Sidebar
            isMobile={isMobile}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex-grow ">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
