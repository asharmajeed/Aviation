import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Motor from './pages/MotorComp.jsx';
import FuelPump from './pages/FuelPump.jsx';
import HydraulicPump from './pages/HydraulicPump.jsx';
import FuelControl from './pages/FuelControl.jsx';
import RepairList from './pages/RepairList.jsx';
import IandR from './pages/IandR.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/motor" element={<Motor />} />
      <Route path="/fuel-pump" element={<FuelPump />} />
      <Route path="/hydraulic-pump" element={<HydraulicPump />} />
      <Route path="/fuel-control" element={<FuelControl />} />
      <Route path="/repair-list" element={<RepairList />} />
      <Route path="/installation-and-repair" element={<IandR />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
