import React from "react";
import hydraulicPumpImg from "../assets/hydraulic-pump.jpg"
import QRCodeComponent from "../components/QRCodeComponent";

const HydraulicPump = () => {
  const repairListUrl = 'https://aviation-eight.vercel.app/repair-list';
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Hydraulic Pump</h1>
      <img
        src={hydraulicPumpImg}
        alt="Hydraulic Pump"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          The hydraulic pump is one of the most important components for
          controlling the aircraft’s various mechanical systems. Its primary
          function is to generate hydraulic pressure, which is then used to
          power essential flight control systems, such as the landing gear,
          brakes, and even the flight control surfaces like ailerons, elevators,
          and rudders. Without a reliable hydraulic system, controlling an
          aircraft, especially a large one, would be incredibly difficult and
          physically taxing for the pilot.
        </p>
        <p className="mb-4">
          There are different types of hydraulic pumps used in aircraft,
          including engine-driven pumps, electric motor-driven pumps, and
          air-driven pumps. Engine-driven pumps are typically used during normal
          flight operations as they rely on the aircraft's engine to generate
          the necessary hydraulic pressure. Electric motor-driven pumps act as
          backups, providing pressure when the engine-driven pump is not
          available, such as during engine start-up or in emergencies. In larger
          commercial aircraft, multiple hydraulic systems and pumps are
          installed for redundancy, ensuring that if one system fails, another
          can take over.
        </p>
        <p>
          The hydraulic pump's role becomes particularly important during
          critical phases of flight, such as takeoff, landing, and ground
          maneuvering. The landing gear and brakes rely heavily on hydraulic
          pressure to operate, and any failure in the hydraulic system could
          have catastrophic consequences. For this reason, modern aircraft have
          sophisticated monitoring systems to alert pilots of any hydraulic
          system issues well in advance. In the event of a hydraulic pump
          failure, backup systems, including electric and auxiliary pumps,
          automatically engage to maintain control over these critical
          components.
        </p>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default HydraulicPump;
