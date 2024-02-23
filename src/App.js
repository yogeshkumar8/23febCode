import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Courses from "./Component/Courses";
import Search from "./Component/Search";
import List from "./Component/List";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
// import Dropdown from "./Component/Dropdown";
import Main from "./Component/Main";
import BasicDetail from "./Component/BasicDetail";
import Appointment from "./Component/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Navbar />
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/courses">Courses</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
          <Route path="/main" element={<Main />}>
            <Route path="basic-details" element={<BasicDetail />} />
            <Route path="appointment-details" element={<Appointment />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
