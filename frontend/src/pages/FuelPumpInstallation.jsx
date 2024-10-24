const FuelPumpInstallation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Pump</h1>
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
    </div>
  );
};
export default FuelPumpInstallation;
