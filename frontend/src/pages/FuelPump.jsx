import React from "react";
import fuelPumpImg from "../assets/fuel-pump.jpg";
import QRCodeComponent from "../components/QRCodeComponent";

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
      <div className="text-lg text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4 text-black">Removal</h1>
        <h1 className="text-2xl font-bold mb-4 text-black">Caution</h1>
        <p className="mb-4">
          Do not allow the fuel pump to hang by the drive shaft during removal
          as damage to the shaft splines may result. Support the pump whenever
          it is not secured to the gearbox with the locknuts.
        </p>
        <ol
          className="mb-4"
          style={{ listStyle: "lower-alpha", listStylePosition: "inside" }}
        >
          <li>Remove the fuel de-icing heater.</li>
          <li>Remove the fuel control from the fuel pump.</li>
          <li>
            Disconnect the fluid pressure differential switch lead at the
            switch.
          </li>
          <li>Remove the fuel supply line from the fuel pump inlet pad.</li>
          <li>
            Remove the locknuts securing the fuel pump to the gearbox and remove
            the pump.
          </li>
          <li>Remove the fluid pressure differential switch from the pump.</li>
        </ol>
      </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4 text-black">Installation</h1>
        <ol
          className="mb-4"
          style={{ listStyle: "lower-alpha", listStylePosition: "inside" }}
        >
          <li>
            Place two new seals on fluid pressure differen-tial switch and
            install switch on fuel pump with electrical connector facing
            rearward.
          </li>
          <li>
            Secure switch to pump with washers and bolts. Tighten bolts to
            recommended torque and lockwire.
          </li>
          <li>
            Apply a coating of extreme pressure lubricating grease, Plastilube
            Moly No. 3 or equivalent, to pump drive spline.
          </li>
          <h1 className="text-2xl font-bold my-4 text-black">Note</h1>
          <p className="mb-4">
            Excessive amounts of lubricant are not necessary. Apply an even coat
            on spline surface with a small, clean paste brush.
          </p>
          <h1 className="text-2xl font-bold my-4 text-black">Caution</h1>
          <p className="mb-4">
            Do not apply lubricant to fuel pump drive splines of P/N 524383
            (Ceco parts list 9489),P/N 524386 (Ceco parts list 0488), and P/N
            500349 (Ceco parts list 9490) fuel pump. Splines of these controls
            are lubricated internally by circulation of engine oil which may be
            retarded by application of grease.
          </p>
          <li>
            Place new packing in ring groove in periphery of fuel pump
            driveshaft and install pump on mounting pad of gearbox and secure
            with washers and locknuts. Tighten locknuts to recommended torque.
          </li>
          <h1 className="text-2xl font-bold my-4 text-black">Caution</h1>
          <p className="mb-4">
            Holley P/N 19A31029A fuel control burner pressure fitting shall not
            be removed to facilitate tightening fuel pump-to-fuel control
            attaching locknuts,
          </p>
          <li>Install fuel control on mounting pad of fuel pump.</li>
          <li>
            Connect fluid pressure differential switch lead to switch. Tighten
            to recommended torque and lockwire.
          </li>
          <li>Install fuel supply line to fuel pump inlet pad.</li>
          <li>Install fuel de-icing heater.</li>
        </ol>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-black">IPC : 9489-A4</h1>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default FuelPump;
