import React from "react";
import motorImg from "../assets/motor.jpg";
import QRCodeComponent from "../components/QRCodeComponent";

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
      <div className="text-lg text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4 text-black">Removal</h1>
        <ol
          className="mb-4"
          style={{ listStyle: "lower-alpha", listStylePosition: "inside" }}
        >
          <li>
            Disconnect cockpit control lever linkage from speed adjusting lever
            (6) on propeller governor.
          </li>
          <li>Disconnect Py pneumatic tube (5) at propeller governor.</li>
          <li>
            Disconnect reversing lever (8) from Beta control valve (7) by
            removing cotterpin, washer, sleeve bushing and straight pin.
          </li>
          <li>
            Disconnect interconnect rod (2) from air bleed link (3) by removing
            cotterpin, castellated nut, washer and bolt.
          </li>
          <li>
            Remove reversing lever (8) from fork end of push-pull control
            linkage (1) by removing cotterpin, castellated nut, spacer and bolt.
          </li>
          <li>
            Remove nuts and washers, and remove governor from mounting pad on
            reduction gearbox.
          </li>
        </ol>
      </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4 text-black">Installation</h1>
        <h1 className="text-2xl font-bold mb-4 text-black">Caution</h1>
        <p className="mb-4">
          AFTER MAJOR TURBINE BLADE FRACTURE, THE PROPELLER GOVERNOR ON ENGINES
          WITH PROPELLER REVERSING MUST BE SENT TO AN APPROVED OVERHAUL FACILITY
          FOR INSPECTION PRIOR TO RETURNING UNIT TO SERVICE.
        </p>
        <ol
          className="mb-4"
          style={{ listStyle: "lower-alpha", listStylePosition: "inside" }}
        >
          <li>
            Install gasket over studs on governor mounting pad on reduction
            gearbox. Ensure that raised side of screen faces upward.
          </li>
          <li>
            Install governor and secure with four plain washers and self-locking
            nuts.
          </li>
          Tighten nuts and torque (Ref. No. 186, Table 4-5-1), using Wrench
          PWC30114-09.
          <li>
            Connect reversing lever (8) to Beta control valve (7) with sleeve
            bushing, straight pin and washer. Lock with cotterpin.
          </li>
          <li>
            Connect reversing lever to fork end of push-pull control linkage (1)
            with bolt, spacer and castellated nut. Tighten nut, torque 24 to 36
            lb.in., and lock with cotterpin.
          </li>
          <li>
            Connect interconnect rod (2) to air bleed link (3) with bolt, washer
            and castellated nut.. Tighten nut, torque (Ref. No. 599, Table
            4-5-1), and lock with cotterpin.
          </li>
        </ol>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-black">IPC : 3032016A</h1>
      <QRCodeComponent url={repairListUrl} />
    </div>
  );
};

export default PropellerGovernor;
