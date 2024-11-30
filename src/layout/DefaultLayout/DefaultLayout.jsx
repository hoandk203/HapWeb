import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DefaultLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="d-flex position-relative">
      <div className={`sidebar-wrapper ${showSidebar ? 'show' : ''}`}>
        <Sidebar />
      </div>
        <div onClick={()=> {setShowSidebar(!showSidebar)}} className={`overlay position-fixed start-0 top-0 end-0 bottom-0 bg-black opacity-50 z-2 ${showSidebar ? '' : 'd-none'}`}></div>
      <main className="col">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
