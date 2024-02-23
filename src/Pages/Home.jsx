// Filename: Pages/Home.js

import React from "react";
import Dropdown from "../Component/Dropdown";
import BasicDetail from "../Component/BasicDetail";
import Login from "./Login";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="">
          {/* <Dropdown /> */}
          <Login />
        </div>
      </div>
      <h1> Home page</h1>

      {/* <BasicDetail /> */}
    </div>
  );
};

export default Home;
