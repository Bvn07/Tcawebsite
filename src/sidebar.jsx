import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button className="SidebarToggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Sidebar Box */}
      <div className={`Sidebar ${open ? "open" : ""}`}>
        <ul>
          <li><Link to="/home">Dashboard</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/points">Points Table</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
