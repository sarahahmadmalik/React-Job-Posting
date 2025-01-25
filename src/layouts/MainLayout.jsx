import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <Header />
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <main>{children}</main>
      </div>
      <ToastContainer />
    </div>
  );
};
export default MainLayout;
