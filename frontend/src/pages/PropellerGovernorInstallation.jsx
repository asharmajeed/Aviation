const PropellerGovernorInstallation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Propeller Governor
      </h1>
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
    </div>
  );
};
export default PropellerGovernorInstallation;
