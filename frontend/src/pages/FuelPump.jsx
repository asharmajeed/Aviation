import React from "react";
import fuelPumpImg from "../assets/fuel-pump.jpg"
import QRCodeComponent from "../components/QRCodeComponent";

const FuelPump = () => {
  const repairListUrl = 'https://aviation-eight.vercel.app/repair-list';
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Pump</h1>
      <img
        src={fuelPumpImg}
        alt="Fuel Pump"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          The fuel pump is a critical component in an aircraft's fuel system,
          responsible for moving fuel from the storage tanks to the engine. In
          most aircraft, the fuel pump operates under pressure, ensuring that
          the fuel reaches the engine at the correct flow rate and pressure
          level. Without this precise operation, the engine could starve of
          fuel, leading to a loss of power or even engine failure during flight.
          In smaller aircraft, a simple mechanical fuel pump might suffice,
          while larger, more complex aircraft may use electric pumps or a
          combination of both for redundancy.
        </p>
        <p className="mb-4">
          Aircraft fuel pumps can be classified into two major types:
          engine-driven and electric pumps. The engine-driven pump is typically
          the primary pump, providing fuel during normal operations. Electric
          pumps often serve as backup pumps, ensuring fuel flow in case the
          primary pump fails or during situations like starting the engine when
          the engine-driven pump isn't operational. These systems are designed
          with multiple fail-safes, ensuring that a loss of one pump doesn’t
          compromise flight safety.
        </p>
        <p>
          Fuel pumps also play a role in fuel balancing. In aircraft with
          multiple fuel tanks, the fuel must be distributed evenly to maintain
          proper balance and center of gravity. A malfunctioning fuel pump can
          disrupt this balance, leading to uneven weight distribution, which may
          affect the aircraft's handling and stability. As such, fuel pumps are
          not just about moving fuel but are integral to maintaining the overall
          performance and safety of the aircraft.
        </p>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default FuelPump;
