import React from "react";
import motorImg from "../assets/motor.jpg";
import QRCodeComponent from "../components/QRCodeComponent";
import { Link } from "react-router-dom";

const PropellerGovernor = () => {
  const repairListUrl = "https://aviation-eight.vercel.app/propeller-governor-monitoring";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Propeller Governor
      </h1>
      <img
        src={motorImg}
        alt="Motor"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-blue-500 underline">
        <Link to="/propeller-governor-removal">Propeller Governor Removal</Link>
      </div>
      <div className="text-blue-500 underline">
        <Link to="/propeller-governor-installation">Propeller Governor Installation</Link>
      </div>
      <div className="text-blue-500 underline">
        <Link to="/propeller-governor-ipc">Propeller Governor IPC</Link>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default PropellerGovernor;
