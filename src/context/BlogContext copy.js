import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

  // empty array to start
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    // pass it in new array from current blog posts and a our new blog posts
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
    { children }
  </BlogContext.Provider>;
};

export default BlogContext;