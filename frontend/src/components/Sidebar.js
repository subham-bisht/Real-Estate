import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineOtherHouses } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { GoTag, GoEye } from "react-icons/go";
import { TbArrowUpFromArc, TbArrowUpToArc } from "react-icons/tb";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="vh-100 p-3 sidebar">
      <div className="Logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav flex-column mt-5">
        <li className="nav-item">
          <Link to="/properties" className="nav-link">
            <div className="d-flex align-items-center">
              <div className="me-2 liLogo">
                <MdOutlineOtherHouses />
              </div>
              <div className="liLogo">Property</div>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">
            <div className="d-flex align-items-center">
              <div className="me-2 liLogo">
                <FaRegBell />
              </div>
              <div className="liLogo">Assistance</div>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">
            <div className="d-flex align-items-center">
              <div className="me-2 liLogo">
                <TbArrowUpFromArc />
              </div>
              <div className="liLogo">Recived Interest</div>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">
            <div className="d-flex align-items-center">
              <div className="me-2 liLogo">
                <TbArrowUpToArc />
              </div>
              <div className="liLogo">Sent Interest</div>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">
            <div className="d-flex align-items-center">
              <div className="me-2 liLogo">
                <GoEye />
              </div>
              <div className="liLogo">Property Views</div>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">
            <div className="d-flex align-items-center">
              <div className="me-2 liLogo">
                <GoTag />
              </div>
              <div className="liLogo">Triff Plan</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
