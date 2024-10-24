const PropellerGovernorRemoval = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Propeller Governor
      </h1>
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
    </div>
  );
};
export default PropellerGovernorRemoval;
