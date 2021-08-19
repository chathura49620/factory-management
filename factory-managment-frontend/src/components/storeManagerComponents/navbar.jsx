import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mb-3"
      style={{ backgroundColor: "#030A22" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          SPM Navbar
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/smdashboard"
              >
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/items">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/itemsrecords">
                Item Records
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/myprofile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
