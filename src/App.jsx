import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";

import "./footer.css";
import "./sidebar.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* Signup is shown first */}
        <Route path="/" element={<Signup />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Home page (after login/signup) */}
        <Route
          path="/home"
          element={
            <>
              <Sidebar />
              <Home />
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
