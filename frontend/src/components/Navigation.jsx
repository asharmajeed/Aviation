import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { FaFan } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { GiPressureCooker } from "react-icons/gi";
import { SiFueler } from "react-icons/si";
import { RiHistoryFill } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa6";
import { LuBadgeInfo } from "react-icons/lu";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="py-3 px-5 flex items-center gap-x-5">
        <div className="drawer inline-block w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="drawer-button cursor-pointer text-3xl text-[#084E50]"
            >
              <GrMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu text-base-content min-h-full w-20 bg-[#084E50] relative">
              <li className="py-3">
                <Link to="/" className="text-white text-3xl focus:text-white">
                  <IoHomeOutline />
                </Link>
              </li>
              <li className="py-3">
                <Link to="/fuel-control" className="text-white text-3xl focus:text-white">
                  <SiFueler />
                </Link>
              </li>
              <li className="py-3">
                <Link to="/fuel-pump" className="text-white text-3xl focus:text-white">
                  <BsFuelPump />
                </Link>
              </li>
              <li className="py-3">
                <Link to="/propeller-governor" className="text-white text-3xl focus:text-white">
                  <FaFan />
                </Link>
              </li>
              {/* <li className="py-3">
                <Link to="/hydraulic-pump" className="text-white text-3xl focus:text-white">
                  <GiPressureCooker />
                </Link>
              </li>
              <li className="py-3">
                <Link to="/installation-and-repair" className="text-white text-3xl focus:text-white">
                  <LuBadgeInfo />
                </Link>
              </li> */}
              <li className="py-3">
                <a href="/MAINTENANCE_MANUAL_JT_12.pdf" target="_blank" className="text-white text-3xl focus:text-white">
                  <FaRegFilePdf />
                </a>
              </li>
              {/* <li className="py-3 absolute bottom-0">
                <Link to="/repair-list" className="text-white text-3xl focus:text-white">
                  <RiHistoryFill />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <Link to="/" className="text-3xl text-[#084E50] font-semibold">Aviation App</Link>
      </div>
      <hr />
    </div>
  );
};
export default Navigation;
