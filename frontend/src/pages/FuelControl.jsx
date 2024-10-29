import React from "react";
import fuelControlImg from "../assets/fuel-control.jpg";
import QRCodeComponent from "../components/QRCodeComponent";
import { Link } from "react-router-dom";

const FuelControl = () => {
  const repairListUrl = "https://aviation-eight.vercel.app/fuel-control-monitoring";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Control</h1>
      <img
        src={fuelControlImg}
        alt="Fuel Control"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-blue-500 underline">
        <Link to="/fuel-control-removal">Fuel Control Removal</Link>
      </div>
      <div className="text-blue-500 underline">
        <Link to="/fuel-control-installation">Fuel Control Installation</Link>
      </div>
      <div className="text-blue-500 underline">
        <Link to="/fuel-control-ipc">Fuel Control IPC</Link>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default FuelControl;
