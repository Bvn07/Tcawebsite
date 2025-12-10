import React, { useState } from "react";
import { supabase } from "./supabaseClient";   // <-- ADDED
import "./post.css";

function Post() {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); // <-- ADDED

  function handleMediaUpload(e) {
    const file = e.target.files[0];
    setMedia(file);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  async function handlePost(e) {
    e.preventDefault();

    if (!text && !media) {
      alert("Write something or upload media!");
      return;
    }

    setLoading(true);

    let mediaUrl = null;
    let mediaType = null;

    // 1️⃣ UPLOAD MEDIA TO SUPABASE STORAGE
    if (media) {
      const fileExt = media.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("post-media")
        .upload(fileName, media);

      if (uploadError) {
        console.error(uploadError);
        alert("Failed to upload media.");
        setLoading(false);
        return;
      }

      // Get public URL
      const { data: publicURL } = supabase.storage
        .from("post-media")
        .getPublicUrl(fileName);

      mediaUrl = publicURL.publicUrl;
      mediaType = media.type.startsWith("image") ? "image" : "video";
    }

    // 2️⃣ GET CURRENT AUTH USER
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;

    if (!user) {
      alert("User not logged in");
      setLoading(false);
      return;
    }

    // 3️⃣ INSERT POST INTO SUPABASE DATABASE
    const { error: insertError } = await supabase.from("posts").insert([
      {
        user_id: user.id,
        text: text,
        media_url: mediaUrl,
        media_type: mediaType,
      },
    ]);

    if (insertError) {
      console.error(insertError);
      alert("Failed to save post.");
      setLoading(false);
      return;
    }

    // 4️⃣ RESET FORM
    setText("");
    setMedia(null);
    setPreview(null);
    setLoading(false);

    alert("Post uploaded successfully!");
  }

  return (
    <div className="post-wrapper">
      <h3>Create Post</h3>

      <form className="post-form" onSubmit={handlePost}>
        {/* Text input */}
        <textarea
          className="post-input"
          placeholder="Share something about cricket today..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Media Preview */}
        {preview && (
          <div className="preview-box">
            {media?.type.startsWith("image") ? (
              <img src={preview} alt="preview" className="preview-media" />
            ) : (
              <video controls className="preview-media">
                <source src={preview} />
              </video>
            )}
          </div>
        )}

        {/* Upload Buttons */}
        <div className="upload-section">
          <label className="upload-btn">
            📸 Image
            <input
              type="file"
              accept="image/*"
              onChange={handleMediaUpload}
              hidden
            />
          </label>

          <label className="upload-btn">
            🎥 Video
            <input
              type="file"
              accept="video/*"
              onChange={handleMediaUpload}
              hidden
            />
          </label>
        </div>

        {/* Post Button */}
        <button className="post-btn" type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
}

export default Post;
