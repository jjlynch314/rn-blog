import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button
        title="Save Blog Post"
      // navigate as a callback function instead of a direct call 
      // after addBlogPost because if we wanted to make an API call for example
      // we would want to wait for that to finish before we navigate
      // onPress={() => {
      //   addBlogPost(title, content, () => {
      //     navigation.navigate('Index');
      //   });
      // }}




      />
    </View>
  );


};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
