import React, { useReducer } from 'react';
import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}` 
        }
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};


const deleteBlogPost = (dispatch) => {
  // the function that is executed by the components is the inner function
  // it is wrapped by distpatch so that the compoenent has access to the dispatch function
  // through context
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id  });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { addBlogPost, deleteBlogPost }, 
  []
);