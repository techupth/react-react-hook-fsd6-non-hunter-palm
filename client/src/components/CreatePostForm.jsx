import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostForm() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:4000/posts", {
      title: title,
      content: content,
    });
    navigate("/");
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Content
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Enter content here"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreatePostForm;
