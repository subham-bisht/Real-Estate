import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>
        <div className="col-md-10 p-0">
          <Header />
          <div className="p-4">
            <h3>Dashboard Overview</h3>
            {/* Replace this with charts, stats, etc. based on the PDF later */}
            <p>This is your main dashboard screen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
