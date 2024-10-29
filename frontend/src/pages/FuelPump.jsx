import React from "react";
import fuelPumpImg from "../assets/fuel-pump.jpg";
import QRCodeComponent from "../components/QRCodeComponent";
import { Link } from "react-router-dom";

const FuelPump = () => {
  const repairListUrl = "https://aviation-eight.vercel.app/fuel-pump-monitoring";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Pump</h1>
      <img
        src={fuelPumpImg}
        alt="Fuel Pump"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-blue-500 underline">
        <Link to="/fuel-pump-removal">Fuel Pump Removal</Link>
      </div>
      <div className="text-blue-500 underline">
        <Link to="/fuel-pump-installation">Fuel Pump Installation</Link>
      </div>
      <div className="text-blue-500 underline">
        <Link to="/fuel-pump-ipc">Fuel Pump IPC</Link>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default FuelPump;
