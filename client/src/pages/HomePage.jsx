import { useNavigate } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";
import axios from "axios"

function HomePage() {
  const {posts,isError,isLoading,getPosts} = useBlogPosts()
  const navigate = useNavigate();
  const handleRemove = async(id) => {
    await axios.delete(`http://localhost:4000/posts/${id}`)
    getPosts()
  }
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button onClick={()=> navigate(`/post/create`)}>Create Post</button>
      </div>
      <div className="board">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
                <button className="edit-button" onClick={() => navigate(`/post/edit/${post.id}`)}>Edit post</button>
              </div>

              <button className="delete-button" onClick={()=>{handleRemove(post.id)}}>x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
