import React from "react";
import motorImg from "../assets/motor.jpg";
import QRCodeComponent from "../components/QRCodeComponent";

const Motor = () => {
  const repairListUrl = 'http://localhost:5173/repair-list';

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Motor</h1>
      <img
        src={motorImg}
        alt="Motor"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          In an aircraft, motors play a vital role in powering various systems,
          from propulsion to auxiliary components. Unlike the engine, which is
          responsible for generating thrust, motors are typically used to drive
          specific mechanisms, such as pumps, fans, and flight control
          actuators. These motors can be electric, pneumatic, or hydraulic,
          depending on their function and the aircraft’s overall design. The
          reliability and performance of motors are critical, as they contribute
          to the aircraft’s safe and efficient operation in various environments
          and flight conditions.
        </p>
        <p className="mb-4">
          Electric motors are among the most commonly used types in modern
          aircraft. They are essential for driving components like fans, pumps,
          and even some landing gear systems. Electric motors are prized for
          their efficiency, precision, and reliability. They are often powered
          by the aircraft’s electrical system, drawing energy from onboard
          batteries or generators. Some aircraft also employ electric motors to
          power emergency systems, ensuring that essential functions can still
          operate in the event of a primary power failure.
        </p>
        <p className="mb-4">
          Hydraulic motors are another important category, often used in
          conjunction with hydraulic pumps to operate heavy-duty systems like
          landing gear or control surfaces. These motors convert hydraulic
          pressure into mechanical power, allowing for the precise movement of
          large components with minimal pilot effort. In larger aircraft,
          hydraulic motors are a key part of the redundancy systems, ensuring
          that even if an electric motor fails, the hydraulic system can take
          over to keep critical systems operational.
        </p>
        <p>
          Motors are also essential in auxiliary power units (APUs), which are
          small engines that provide electrical and pneumatic power to the
          aircraft when the main engines are not running. APUs typically power
          the electrical systems, air conditioning, and some hydraulic
          functions, particularly during ground operations or in-flight
          emergencies. The motor’s reliability, therefore, directly impacts the
          aircraft’s safety and comfort systems, making it a critical component
          in both day-to-day operations and emergency scenarios.
        </p>
      </div>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default Motor;
