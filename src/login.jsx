import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate("/home"); // Logged in → Home
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />

        <button type="submit">{loading ? "Logging in..." : "Login"}</button>

        <p className="switch-text">
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
