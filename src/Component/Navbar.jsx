import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-secondary p-1 bg-gradient  ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              height={40}
              width={70}
              alt="Logo"
              src="https://media.istockphoto.com/id/876177980/vector/university-vector.jpg?s=612x612&w=0&k=20&c=FqW7PHJFlpzTfK3ax3zPhxgTCgCnVQaPnnmTRPmdjjc="
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item"></li>
              {/* <Link className='d'  to="/about">About</Link> */}
            </ul>

            <div className=" d-flex gap-2 m-2">
              <Link to="/signup">
                <button className="btn btn-primary m-auto gap-2">SignUp</button>
              </Link>

              <Link to="/login">
                <button className="btn btn-primary m-auto gap-2">Login</button>
              </Link>
            </div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn 2 bg-dark text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
