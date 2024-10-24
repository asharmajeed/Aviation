const FuelControlInstallation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Control</h1>
      <div className="text-lg text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4 text-black">Installation</h1>
        <h1 className="text-2xl font-bold mb-4 text-black">Caution</h1>
        <p className="mb-4">
          Do not allow fuel control to hang by driveshaft during installation as
          damage to shaft splines may result. Support control whenever it is not
          secured to fuel pump with locknuts.
        </p>
        <ol
          className="mb-4"
          style={{ listStyle: "lower-alpha", listStylePosition: "inside" }}
        >
          <li>
            Place new seals on fuel inlet tube, and driveshaft end of fuel
            control.
          </li>
          <li>
            Install control on mounting pad of pump and secure with washers and
            locknuts. Tighten locknuts to recommended torque.
          </li>
          <h1 className="text-2xl font-bold my-4 text-black">Note</h1>
          <p className="mb-4">
            Do not apply lubricant to fuel control driveshaft spline.
          </p>
          <li>
            Engage face-splined power-lever link with face-splined fuel control
            drive. Install securing. Apply torque of 35-45 pound-inches and
            lock-wire nut. As required, adjust power lever linkage. See Figure
            2-50A.I link are appears excessively stiff, actuate at least 50
            times to facilitate run-in of bearings.
          </li>
          <h1 className="text-2xl font-bold my-4 text-black">Caution</h1>
          <p className="mb-4">
            When rigging power lever linkage on engines equipped with Hamilton
            Standard fuel controls and before tightening shaft nut, bottom index
            pin with head or pointer end flush against power lever shaft to
            ensure proper contact of index pin with power lever stop.
          </p>
          <p className="mb-4">
            Do not wrench Holley fuel control bleed strap signal valve screw at
            any time to actuate bleed strap mechanism as shearing of serration
            will occur in bleed actuator housing when lever and shafts are
            disem-gaged
          </p>
          <li>Install fuel system tubes to fuel control.</li>
          <li>Adjust and install compressor bleed valve linkage.</li>
        </ol>
        <h1 className="text-2xl font-bold mb-4 text-black">Note</h1>
        <p className="mb-4">
          Air bleed valve linkage adjustment shall be performed after each fuel
          control re-placement.
        </p>
      </div>
    </div>
  );
};
export default FuelControlInstallation;
