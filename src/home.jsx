import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  // 🔐 Protect the page
  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) navigate("/login");
    }
    checkUser();
  }, []);

  // 📌 Fetch posts from Supabase
  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="home-wrapper">

      {/* Sticky Top Header */}
      <div className="home-header">
        <h2>TCA Cricket Feed</h2>
      </div>

      {/* Feed Container */}
      <div className="feed-container">

        {/* 🔥 DYNAMIC REAL POSTS */}
        {posts.map((post) => (
          <div key={post.id} className="post-card">

            {/* Author */}
            <div className="post-author">
              <img
                src="https://i.pravatar.cc/150"
                alt="user"
                className="profile-img"
              />
              <span className="author-name">
                {post.user_id?.slice(0, 6)} posted
              </span>
            </div>

            {/* Text */}
            {post.text && <p className="post-text">{post.text}</p>}

            {/* Image or Video */}
            {post.media_url && (
              post.media_type === "image" ? (
                <img src={post.media_url} className="post-media" alt="post" />
              ) : (
                <video className="post-media" controls>
                  <source src={post.media_url} />
                </video>
              )
            )}

            {/* Post Actions */}
            <div className="post-actions">
              <span>❤️ 0</span>
              <span>💬 0</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
