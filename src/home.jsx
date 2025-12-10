import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";    // <-- important
import CardsContainer from "./CardsContainer.jsx";
import "./home.css";                             // if you have css

function Home() {
  const navigate = useNavigate();

  // PROTECT THE PAGE — only show Home if user is logged in
  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/login"); // redirect if NOT logged in
      }
    }

    checkUser();
  }, []);

  return (
    <div className='Home1'>
      <h1>Homepage</h1>
      <p>Test website building is on TCA</p>

      <CardsContainer />
    </div>
  );
}

export default Home;
