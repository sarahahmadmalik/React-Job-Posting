import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import './styles/Wrapper.css';

const Wrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="wrapper">
      <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />
      <div className="wrapper-content">
        <Sidebar
          isMobile={isMobile}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="wrapper-main-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;