import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Post from "./post";   // <-- ADDED

import "./footer.css";
import "./sidebar.css";

function App() {
  return (
    <Router>
      <Routes>

        {/* Signup is shown first (NO NAVBAR) */}
        <Route path="/" element={<Signup />} />

        {/* Login page (NO NAVBAR) */}
        <Route path="/login" element={<Login />} />

        {/* Home page (NAVBAR + SIDEBAR + FOOTER) */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />   {/* NAVBAR ONLY HERE */}
              <Sidebar />
              <Home />
              <Footer />
            </>
          }
        />

        {/* POST PAGE (NAVBAR + SIDEBAR + FOOTER) */}
        <Route
          path="/post"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Post />      {/* <-- ADDED */}
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
