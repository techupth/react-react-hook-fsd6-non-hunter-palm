import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPostForm() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const params = useParams()
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:4000/posts/${params.id}`, {
      title: title,
      content: content,
    });
    navigate("/");
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Edit Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            onChange={(e) => {setTitle(e.target.value)}}
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
            onChange={(e) => {setContent(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditPostForm;
