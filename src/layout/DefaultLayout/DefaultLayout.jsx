import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DefaultLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="col">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
