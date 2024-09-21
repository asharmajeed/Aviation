import React from "react";
import fuelControlImg from "../assets/fuel-control.jpg"
import QRCodeComponent from "../components/QRCodeComponent";

const FuelControl = () => {
  const repairListUrl = 'https://aviation-eight.vercel.app/repair-list';
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Control</h1>
      <img
        src={fuelControlImg}
        alt="Fuel Control"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          The fuel control system in an aircraft is a highly sophisticated
          mechanism that ensures the optimal performance of the engine across
          all flight conditions. Its primary role is to regulate the fuel
          mixture and flow rate, ensuring that the engine operates efficiently
          whether the aircraft is climbing, cruising, or descending. Early
          aircraft relied on manual fuel control systems, where pilots had to
          adjust fuel mixtures based on altitude and air pressure. Today, most
          modern aircraft are equipped with automatic fuel control systems that
          continuously monitor conditions and adjust fuel flow accordingly.
        </p>
        <p className="mb-4">
          Fuel control systems manage a complex interaction between the engine,
          air intake, and fuel delivery to optimize performance. They adjust
          fuel flow to ensure the correct air-fuel ratio, critical for efficient
          combustion and engine power. During takeoff, the fuel control system
          ensures that the engine receives maximum fuel for the high power
          needed to climb. Conversely, during cruising, it reduces fuel flow to
          ensure fuel efficiency while maintaining engine performance.
        </p>
        <p>
          In modern jet engines, the fuel control system is part of an
          electronic engine control system, often referred to as FADEC (Full
          Authority Digital Engine Control). FADEC systems use sensors
          throughout the engine to monitor temperature, pressure, and engine
          speed, adjusting the fuel flow in real-time to maximize efficiency and
          safety. This automation significantly reduces the pilot's workload and
          ensures that the engine operates within safe limits at all times. The
          fuel control system is also integrated with other onboard systems to
          ensure that any deviations from optimal performance are corrected
          instantly, minimizing the risk of engine issues during flight.
        </p>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default FuelControl;
