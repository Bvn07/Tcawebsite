import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  // PROTECT THE PAGE (same logic)
  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) navigate("/login");
    }
    checkUser();
  }, []);

  return (
    <div className="home-wrapper">

      {/* Sticky Top Header */}
      <div className="home-header">
        <h2>TCA Cricket Feed</h2>
      </div>

      {/* Feed Container */}
      <div className="feed-container">

        {/* Example Post — IMAGE */}
        <div className="post-card">
          <div className="post-author">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="user"
              className="profile-img"
            />
            <span className="author-name">Riyaz posted</span>
          </div>

          <p className="post-text">
            What a match today! Our team defended the lowest total of the season 🔥🔥
          </p>

          <img
            src="https://source.unsplash.com/400x300/?cricket,match"
            className="post-media"
            alt="post"
          />

          <div className="post-actions">
            <span>❤️ 24</span>
            <span>💬 6</span>
          </div>
        </div>

        {/* Example Post — VIDEO */}
        <div className="post-card">
          <div className="post-author">
            <img
              src="https://i.pravatar.cc/150?img=9"
              alt="user"
              className="profile-img"
            />
            <span className="author-name">Akash posted</span>
          </div>

          <p className="post-text">
            Last over winning shot by Surya! 🔥 Check the video 👇
          </p>

          <video className="post-media" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
          </video>

          <div className="post-actions">
            <span>❤️ 43</span>
            <span>💬 12</span>
          </div>
        </div>

        {/* Example Post — TEXT ONLY */}
        <div className="post-card">
          <div className="post-author">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="user"
              className="profile-img"
            />
            <span className="author-name">Vicky posted</span>
          </div>

          <p className="post-text">
            TCA Tournament starts in 10 days! Get your squads ready 🏏🔥
          </p>

          <div className="post-actions">
            <span>❤️ 19</span>
            <span>💬 3</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
