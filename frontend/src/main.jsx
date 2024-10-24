import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PropellerGovernor from "./pages/PropellerGovernor.jsx";
import FuelPump from "./pages/FuelPump.jsx";
import HydraulicPump from "./pages/HydraulicPump.jsx";
import FuelControl from "./pages/FuelControl.jsx";
import RepairList from "./pages/RepairList.jsx";
import IandR from "./pages/IandR.jsx";
import FuelControlPage from "./pages/FuelControlPage.jsx";
import FuelPumpPage from "./pages/FuelPumpPage.jsx";
import PropellerGovernorPage from "./pages/PropellerGovernorPage.jsx";
import FuelControlRemoval from "./pages/FuelControlRemoval.jsx";
import FuelControlInstallation from "./pages/FuelControlInstallation.jsx";
import FuelControlIpc from "./pages/FuelControlIpc.jsx";
import FuelPumpRemoval from "./pages/FuelPumpRemoval.jsx";
import FuelPumpInstallation from "./pages/FuelPumpInstallation.jsx";
import FuelPumpIpc from "./pages/FuelPumpIpc.jsx";
import PropellerGovernorRemoval from "./pages/PropellerGovernorRemoval.jsx";
import PropellerGovernorInstallation from "./pages/PropellerGovernorInstallation.jsx";
import PropellerGovernorIpc from "./pages/PropellerGovernorIpc.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/fuel-control" element={<FuelControl />} />
      <Route path="/fuel-control-removal" element={<FuelControlRemoval />} />
      <Route path="/fuel-control-installation" element={<FuelControlInstallation />} />
      <Route path="/fuel-control-ipc" element={<FuelControlIpc />} />
      <Route path="/fuel-control-monitoring" element={<FuelControlPage />} />
      <Route path="/fuel-pump" element={<FuelPump />} />
      <Route path="/fuel-pump-removal" element={<FuelPumpRemoval />} />
      <Route path="/fuel-pump-installation" element={<FuelPumpInstallation />} />
      <Route path="/fuel-pump-ipc" element={<FuelPumpIpc />} />
      <Route path="/fuel-pump-monitoring" element={<FuelPumpPage />} />
      <Route path="/propeller-governor" element={<PropellerGovernor />} />
      <Route path="/propeller-governor-removal" element={<PropellerGovernorRemoval />} />
      <Route path="/propeller-governor-installation" element={<PropellerGovernorInstallation />} />
      <Route path="/propeller-governor-ipc" element={<PropellerGovernorIpc />} />
      <Route path="/propeller-governor-monitoring" element={<PropellerGovernorPage />} />
      <Route path="/hydraulic-pump" element={<HydraulicPump />} />
      <Route path="/repair-list" element={<RepairList />} />
      <Route path="/installation-and-repair" element={<IandR />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
