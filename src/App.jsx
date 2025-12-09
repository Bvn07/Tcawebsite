import React from 'react';
import Home from "./home";
import Navbar  from './navbar';
import Footer from "./footer.jsx"
import "./footer.css";
import Sidebar from "./sidebar.jsx";
import "./sidebar.jsx"

function App() {
  return ( 
    <div className='App1'>
      <Navbar />
      <Sidebar />
      <Home />
      
      <Footer />
    </div>
  )
}

export default App;