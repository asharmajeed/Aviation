const FuelPumpRemoval = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Pump</h1>
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
    </div>
  );
};
export default FuelPumpRemoval;
