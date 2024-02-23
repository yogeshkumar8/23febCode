import * as React from "react";

import "bootstrap/js/dist/dropdown";
import "bootstrap-icons/font/bootstrap-icons.json";
import "bootstrap/js/dist/collapse";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-auto col-sm-2 bg-dark d-flex flex-column min-vh-100">
          <div className=" mt-4">
            <a className=" text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline	">
              <span className="fs-5">Side Menu</span>
            </a>
            <hr className=" text-white d-none d-sm-block"></hr>
            <ul class="nav nav-pills d-flex flex-column" id="parentM">
              <li class="nav-item  my-1">
                <a href="/" class="nav-link text-white" aria-current="page">
                  <i className=" bi bi-speedometer2"></i>
                  <span>DashBoard</span>
                </a>
              </li>
              <li class="nav-item  my-1">
                <a
                  href="#submenu"
                  class="nav-link text-white "
                  data-bs-toggle="collapse"
                  aria-current="page"
                  // data-bs-target="#submenu"
                >
                  <i className=" bi bi-speedometer2"></i>
                  <span>Register</span>
                </a>

                <ul
                  class="nav collapse ms-1 bg-body-secondary rounded "
                  id="submenu"
                  data-bs-parent="#parentM"
                >
                  <li class="nav-item ">
                    <Link
                      class="nav-link text-black"
                      to="/login"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                  <li classActive="nav-item">
                    <Link class="nav-link text-black " to="/signup">
                      SignUp
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="nav nav-pills d-flex flex-column" id="parentM">
              <li class="nav-item  my-1">
                <a
                  href="#submenu1"
                  class="nav-link text-white "
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <i className=" bi bi-speedometer2"></i>
                  <span>User</span>
                </a>

                <ul
                  class="nav collapse ms-1 bg-body-secondary rounded"
                  id="submenu1"
                  data-bs-parent="#parentM"
                >
                  <li class="nav-item ">
                    <Link
                      class="nav-link text-black"
                      to="#"
                      aria-current="page"
                    >
                      Students
                    </Link>
                  </li>
                  <li classActive="nav-item ">
                    <Link class="nav-link text-black " to="#">
                      Books
                    </Link>
                  </li>
                  <li classActive="nav-item">
                    <Link class="nav-link text-black" to="#">
                      Issued Books
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="dropdown open">
            <a
              class="btn border-none btn-secondary dropdown-toggle text-white "
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Dropdown Anchor</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item " href="#">
                Disabled action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
