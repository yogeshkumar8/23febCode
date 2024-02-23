import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <form>
        <div className="row mt-5">
          <div class="col-md-4"></div>
          <div class="col-md-4 border p-5">
            <h1>Register</h1>

            <div className="d-flex flex-column ">
              <label htmlFor="text">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="name p-2 mb-2 "
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="email p-2 mb-2 "
              />

              <label htmlFor="text">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                className="number p-2 mb-2 "
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="password p-2 mb-2"
              />
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
                className="password p-2 mb-2"
              />

              <button type="submit" className="btn btn-primary m-auto mb-2">
                Submit
              </button>

              <p>
                Don't have an account?<Link to={"/login"}>Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
