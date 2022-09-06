import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service";
import About from "./About";
import "./Navbarweb.css";

function Navbarweb() {
  console.log("000000i am in navbarwebapp")
  return (
    <>
      <div id="navbarweb-css" className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Educational Web App
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* me for margin end right and  ms-auto is for margin left */}
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <div className="navBar-buttons">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/home"
                        >
                          Home
                        </Link>
                      </li>
                    </div>

                    <div className="navBar-buttons">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/service"
                        >
                          Services
                        </Link>
                      </li>
                    </div>

                    <div className="navBar-buttons">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                    </div>
                    <div className="navBar-buttons">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbarweb;
