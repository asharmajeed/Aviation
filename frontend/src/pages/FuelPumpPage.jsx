import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

const FuelPumpPage = () => {
  const [fuelPumpList, setFuelPumpList] = useState([]);
  const [fetchExpireDate, setFetchExpireDate] = useState(null);

  const [timeLeft, setTimeLeft] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const [isFormVisible, setFormVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [inputRepairDate, setInputRepairDate] = useState("");
  const [inputExpireDate, setInputExpireDate] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const repairData = {
      username,
      repairDate: inputRepairDate,
      expireDate: inputExpireDate,
      componentType: "Fuel Pump",
    };

    try {
      const response = await fetch("https://aviationbackend.vercel.app/api/repairs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(repairData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newRepair = await response.json();

      setFuelPumpList([...fuelPumpList, newRepair]);

      // Clear the form and hide it
      setUsername("");
      setInputRepairDate("");
      setInputExpireDate("");
      setFormVisible(false);
    } catch (error) {
      console.log("Error adding repair:", error);
    }
  };

  const handleAddClick = () => {
    setFormVisible(true);

    // Scroll to form smoothly
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Small delay to allow form to render before scrolling
  };

  const fetchRepairs = async (componentType) => {
    try {
      const response = await fetch(
        `https://aviationbackend.vercel.app/api/repairs/${componentType}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFuelPumpList(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRepairs("Fuel Pump");
  }, []);

  useEffect(() => {
    if (fuelPumpList.length > 0) {
      setFetchExpireDate(
        fuelPumpList[fuelPumpList.length - 1].expireDate
      ); // Set expireDate from the first repair
    }
  }, [fuelPumpList]);

  // Calculate time remaining for the latest repair expiration date
  useEffect(() => {
    if (fetchExpireDate) {
      const expireDate = moment(fetchExpireDate);
      const now = moment();

      if (now.isAfter(expireDate)) {
        setIsExpired(true);
        setTimeLeft("Expired");
      } else {
        const interval = setInterval(() => {
          const currentTime = moment();
          const duration = moment.duration(expireDate.diff(currentTime));

          // Calculate days, hours, minutes, and seconds
          const days = duration.days();
          const hours = duration.hours();
          const minutes = duration.minutes();
          const seconds = duration.seconds();

          setTimeLeft(
            `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
          );

          // If the expiration date has passed, mark as expired
          if (currentTime.isAfter(expireDate)) {
            setIsExpired(true);
            setTimeLeft("Expired");
          }
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup the interval on unmount
      }
    }
  }, [fetchExpireDate]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Fuel Pump Monitoring</h1>
      <p className="text-gray-700 mb-4">
        Monitor the life and maintenance status of the Fuel Pump system.
      </p>

      {/* Countdown or Expiration Status */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Time until next expiration:</h3>
        <p
          className={`text-lg ${isExpired ? "text-red-600" : "text-green-600"}`}
        >
          {timeLeft}
        </p>
        {!timeLeft && <p className="text-red-600 text-lg">No Data Found</p>}
      </div>

      {/* Repair History List */}
      <h3 className="text-2xl font-semibold mb-4">Repair History</h3>
      {fuelPumpList.length > 0 ? (
        <ul className="list-disc pl-6">
          {fuelPumpList
            .slice()
            .reverse()
            .map((item, index) => (
              <li key={index} className="mb-2">
                <strong>Username:</strong> {item.username} -
                <strong> Repair Date:</strong>{" "}
                {moment(item.repairDate).format("MMMM DD, YYYY")} -
                <strong> Expire Date:</strong>{" "}
                {moment(item.expireDate).format("MMMM DD, YYYY")}
              </li>
            ))}
        </ul>
      ) : (
        <p className="text-red-600 text-lg">No Data Found</p>
      )}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg my-4"
        onClick={() => handleAddClick()}
      >
        Add Fuel Pump Repair
      </button>

      {isFormVisible && (
        <div
          ref={formRef} // Ref to scroll into view
          className="p-4 bg-gray-100 rounded-lg shadow-lg mt-6"
        >
          <h3 className="text-lg font-bold mb-4">
            Add Fuel Pump Repair Info
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
                value={inputRepairDate}
                onChange={(e) => setInputRepairDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Expire Date:</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={inputExpireDate}
                onChange={(e) => setInputExpireDate(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Add to Fuel Pump List
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FuelPumpPage;
