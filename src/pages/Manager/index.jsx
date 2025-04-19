import React from "react";
// import SideBarManger from "./SideBarManger/SideBarManger";

import ManagerSideBar from "../../component/Layouts/ManagerSideBar/managerSideBar";
import { Outlet } from "react-router-dom";
import "./index.css";
export default function Maneger() {
  return (
    <div className="manger-page">
      <div className="Side-first">
        <ManagerSideBar />
      </div>

      <div className="Side-second">
        <Outlet/>
      </div>
    </div>
  );
}

// import Sidebar from "./components/Sidebar";
// import { Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Layout;
