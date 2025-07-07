import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      navigate("/");
    }, 0);
  };
  return (
    <div className="bg-fafbfc hearder p-5 border-bottom d-flex justify-content-between align-items-center">
      <h6>User ID : {loggedInUser}</h6>
      <div className="dropdown hover-dropdown">
        <span>
          <FaUser /> User {loggedInUser}
        </span>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
