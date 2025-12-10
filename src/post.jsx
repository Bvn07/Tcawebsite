import React, { useState } from "react";
import "./post.css";

function Post({ onSubmit }) {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);

  function handleMediaUpload(e) {
    const file = e.target.files[0];
    setMedia(file);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  function handlePost(e) {
    e.preventDefault();

    if (!text && !media) {
      alert("Write something or upload media!");
      return;
    }

    // Sending data to parent component
    onSubmit({ text, media });

    // Reset form
    setText("");
    setMedia(null);
    setPreview(null);
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
            {media.type.startsWith("image") ? (
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
        <button className="post-btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
