import React, { useReducer } from 'react';
import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {

  // example calling an api with call back
  // return async (title, content, callback) => {
  //   try {
  //     await axios.post('/posts', { title, content });
  //     dispatch({ type: 'add_blogpost', payload: { title, content } });
  //     callback();
  //   } catch (e) {

  //   }
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};


const deleteBlogPost = (dispatch) => {
  // the function that is executed by the components is the inner function
  // it is wrapped by distpatch so that the compoenent has access to the dispatch function
  // through context
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

// export const { Context, Provider } = createDataContext(
//   blogReducer,
//   { addBlogPost, deleteBlogPost },
//   []
// );

// For creating default content for testing
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);