import React, { useState, useRef } from "react";
import moment from "moment";

const RepairList = () => {
  // State to hold the list for each component
  const [fuelPumpList, setFuelPumpList] = useState([]);
  const [hydraulicPumpList, setHydraulicPumpList] = useState([]);
  const [fuelControlList, setFuelControlList] = useState([]);
  const [motorList, setMotorList] = useState([]);

  // State to control form visibility
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("");

  // Form input states
  const [username, setUsername] = useState("");
  const [repairDate, setRepairDate] = useState("");
  const [expireDate, setExpireDate] = useState("");

  // Ref for the form element
  const formRef = useRef(null);

  // Handle the submission of the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const repairData = {
      username,
      repairDate,
      expireDate,
      componentType: currentComponent,
    };

    try {
      const response = await fetch(
        "https://aviationbackend.vercel.app/api/repairs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(repairData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newRepair = await response.json();

      // Based on current component, add the new data to the respective list
      if (currentComponent === "Fuel Pump") {
        setFuelPumpList([...fuelPumpList, newRepair]);
      } else if (currentComponent === "Hydraulic Pump") {
        setHydraulicPumpList([...hydraulicPumpList, newRepair]);
      } else if (currentComponent === "Fuel Control") {
        setFuelControlList([...fuelControlList, newRepair]);
      } else if (currentComponent === "Motor") {
        setMotorList([...motorList, newRepair]);
      }

      // Clear the form and hide it
      setUsername("");
      setRepairDate("");
      setExpireDate("");
      setFormVisible(false);
    } catch (error) {
      console.error("Error adding repair:", error);
    }
  };

  // Show the form for the respective component and scroll to form
  const handleAddClick = (component) => {
    setCurrentComponent(component);
    setFormVisible(true);

    // Scroll to form smoothly
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Small delay to allow form to render before scrolling
  };

  // Fetch repair list from backend
  const fetchRepairs = async (componentType) => {
    try {
      const response = await fetch(
        `https://aviationbackend.vercel.app/api/repairs/${componentType}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      switch (componentType) {
        case "Fuel Pump":
          setFuelPumpList(data);
          break;
        case "Hydraulic Pump":
          setHydraulicPumpList(data);
          break;
        case "Fuel Control":
          setFuelControlList(data);
          break;
        case "Motor":
          setMotorList(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching repair list:", error);
    }
  };

  // Fetch the lists when the component mounts
  React.useEffect(() => {
    fetchRepairs("Fuel Pump");
    fetchRepairs("Hydraulic Pump");
    fetchRepairs("Fuel Control");
    fetchRepairs("Motor");
  }, []);

  return (
    <div className="p-6">
      {/* Fuel Pump Section */}
      <h2 className="text-2xl font-bold mb-2">Fuel Pump</h2>
      <ul className="mb-4">
        {fuelPumpList.map((item, index) => (
          <li key={index} className="mb-2 text-lg">
            <span className="font-semibold">Username:</span> {item.username} |{" "}
            <span className="font-semibold">Repair Date:</span>{" "}
            {moment(item.repairDate).format("MMMM DD, YYYY")} |{" "}
            <span className="font-semibold">Expire Date:</span>{" "}
            {moment(item.expireDate).format("MMMM DD, YYYY")}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => handleAddClick("Fuel Pump")}
      >
        Add Fuel Pump Repair
      </button>

      {/* Hydraulic Pump Section */}
      <h2 className="text-2xl font-bold mb-2">Hydraulic Pump</h2>
      <ul className="mb-4">
        {hydraulicPumpList.map((item, index) => (
          <li key={index} className="mb-2 text-lg">
            <span className="font-semibold">Username:</span> {item.username} |{" "}
            <span className="font-semibold">Repair Date:</span>{" "}
            {moment(item.repairDate).format("MMMM DD, YYYY")} |{" "}
            <span className="font-semibold">Expire Date:</span>{" "}
            {moment(item.expireDate).format("MMMM DD, YYYY")}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => handleAddClick("Hydraulic Pump")}
      >
        Add Hydraulic Pump Repair
      </button>

      {/* Fuel Control Section */}
      <h2 className="text-2xl font-bold mb-2">Fuel Control</h2>
      <ul className="mb-4">
        {fuelControlList.map((item, index) => (
          <li key={index} className="mb-2 text-lg">
            <span className="font-semibold">Username:</span> {item.username} |{" "}
            <span className="font-semibold">Repair Date:</span>{" "}
            {moment(item.repairDate).format("MMMM DD, YYYY")} |{" "}
            <span className="font-semibold">Expire Date:</span>{" "}
            {moment(item.expireDate).format("MMMM DD, YYYY")}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => handleAddClick("Fuel Control")}
      >
        Add Fuel Control Repair
      </button>

      {/* Motor Section */}
      <h2 className="text-2xl font-bold mb-2">Motor</h2>
      <ul className="mb-4">
        {motorList.map((item, index) => (
          <li key={index} className="mb-2 text-lg">
            <span className="font-semibold">Username:</span> {item.username} |{" "}
            <span className="font-semibold">Repair Date:</span>{" "}
            {moment(item.repairDate).format("MMMM DD, YYYY")} |{" "}
            <span className="font-semibold">Expire Date:</span>{" "}
            {moment(item.expireDate).format("MMMM DD, YYYY")}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => handleAddClick("Motor")}
      >
        Add Motor Repair
      </button>

      {/* Form to add new data */}
      {isFormVisible && (
        <div
          ref={formRef} // Ref to scroll into view
          className="p-4 bg-gray-100 rounded-lg shadow-lg mt-6"
        >
          <h3 className="text-lg font-bold mb-4">
            Add {currentComponent} Repair Info
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Repair Date:</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={repairDate}
                onChange={(e) => setRepairDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Expire Date:</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Add to {currentComponent} List
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RepairList;
