import React, { useState } from "react";
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
          <li><a href="/">Dashboard</a></li>
          <li><a href="/players">Players</a></li>
          <li><a href="/Live Updates">Matches</a></li>
          <li><a href="/Legends">Points Table</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
