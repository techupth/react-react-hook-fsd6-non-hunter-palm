import { useState, useEffect } from "react";
import axios from "axios";

function useBlogPosts() {
  const [getDataPost, setGetDataPost] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get("http://localhost:4000/posts");
      setGetDataPost(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
 
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {getDataPost, isError, isLoading};

}

export default useBlogPosts;