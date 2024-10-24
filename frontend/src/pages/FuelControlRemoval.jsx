const FuelControlRemoval = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">Fuel Control</h1>
      <div className="text-lg text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4 text-black">Removal</h1>
        <h1 className="text-2xl font-bold mb-4 text-black">Caution</h1>
        <p className="mb-4">
          Do not allow the fuel control to hang by driveshaft during removal as
          damage to shaft splines may result. Support control whenever it is not
          secured to fuel pump with locknuts. Flexible driveshaft assembly shall
          not be used as a step: Distortion and stretching of cable could induce
          ultimate failure.
        </p>
        <ol
          className="mb-4"
          style={{ listStyle: "lower-alpha", listStylePosition: "inside" }}
        >
          <li>Remove fuel system tubes connected to fuel control.</li>
          <li>Disconnect compressor bleed actuating rod.</li>
          <li>Disconnect power lever linkage from fuel control.</li>
        </ol>
        <h1 className="text-2xl font-bold mb-4 text-black">Caution</h1>
        <p className="mb-4">
          Do not wrench Holley fuel control bleed strap signal valve screw, at
          any time to actuate bleed strap mechanism as shearing of serration
          will occur in bleed actuator housing when lever and shafts are
          disengaged.
        </p>
        <h1 className="text-2xl font-bold mb-4 text-black">Note</h1>
        <p className="mb-4">
          Do not remove fuel control power lever position indicating quadrant
          from fuel control. Removal of quadrant may result in mis-indexing of
          mating parts and improper bleed valve operation. Proper reinstallation
          of these parts can be assured only through a bench calibration of
          control. Remove locknuts securing fuel control to fuel pump and remove
          control.
        </p>
        <h1 className="text-2xl font-bold mb-4 text-black">Caution</h1>
        <p className="mb-4">
          Do not remove or reindex Holley fuel control dial pointer assembly.
          Relationship of pointer to shaft is established during bench
          calibration and cannot be altered-in course of control rigging.
        </p>
      </div>
    </div>
  );
};
export default FuelControlRemoval;
