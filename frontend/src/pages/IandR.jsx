import React from 'react';
import IRImg from '../assets/IR.png'

const IandR = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Single Image Section */}
      <img
        src={IRImg} // Replace with actual image path
        alt="Aircraft Components"
        className="w-full h-auto rounded-lg mb-6"
      />

      {/* Fuel Control Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Fuel Control</h2>
        <div className="text-gray-700">
          <h3 className="text-2xl font-semibold mb-2">Removal</h3>
          <p className="mb-2">
            Remove fuel system tubes connected to the fuel control. Disconnect
            compressor bleed actuating rod. Disconnect power lever linkage from
            the fuel control. Remove locknuts securing the fuel control to the
            fuel pump and remove control.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Installation</h3>
          <p className="mb-2">
            Place new seals on the fuel inlet tube and driveshaft end of the
            fuel control. Install the control on the mounting pad of the pump
            and secure it with washers and locknuts. Tighten locknuts to the
            recommended torque. Engage the face-splined power-lever link with
            the face-splined fuel control drive. Install the securing nut, apply
            a torque of 35-45 pound-inches, and lock wire the nut. Adjust the
            power lever linkage as required. If the linkage appears excessively
            stiff, actuate it at least 50 times to facilitate run-in of
            bearings. Install fuel system tubes to the fuel control, and adjust
            and install compressor bleed valve linkage.
          </p>
        </div>
      </section>

      {/* Fuel Pump Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Fuel Pump</h2>
        <div className="text-gray-700">
          <h3 className="text-2xl font-semibold mb-2">Removal</h3>
          <p className="mb-2">
            Remove the fuel de-icing heater. Remove the fuel control from the
            fuel pump. Disconnect the fluid pressure differential switch lead at
            the switch. Remove the fuel supply line from the fuel pump inlet
            pad. Remove the locknuts securing the fuel pump to the gearbox and
            remove the pump. Finally, remove the fluid pressure differential
            switch from the pump.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Installation</h3>
          <p className="mb-2">
            Place two new seals on the fluid pressure differential switch and
            install the switch on the fuel pump with the electrical connector
            facing rearward. Secure the switch to the pump with washers and
            bolts. Tighten bolts to the recommended torque and lock wire them.
            Apply a coating of extreme pressure lubricating grease (Plastilube
            Moly No. 3 or equivalent) to the pump drive spline. Place new
            packing in the ring groove in the periphery of the fuel pump
            driveshaft. Install the pump on the mounting pad of the gearbox and
            secure it with washers and lockouts. Tighten lockouts to the
            recommended torque. Install the fuel control on the mounting pad of
            the fuel pump. Connect the fluid pressure differential switch lead
            to the switch. Tighten it to the recommended torque and lock wire.
            Install the fuel supply line to the fuel pump inlet pad, then
            install the fuel de-icing heater.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IandR;
