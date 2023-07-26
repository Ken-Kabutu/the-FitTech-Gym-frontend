import React, { useState } from 'react'
import { Axios } from 'axios';
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  FormEditInput,
  Form,
  FormInput,
  FormLabel,
  EditButton,
  FormButtonSearch,
  LinkEdit
} from './StyledComponents'


function PostApi() {

  const [data, setData] = useState({
  title: '',
  content: '',
  user_id: 1, //we can replace with actual user_id of logged in user
  });

  //state for handling login
  const [loginData, setLoginData] = useState({
    email: '',
    password:'',
  });

    // State for handling user registration
    const [registrationData, setRegistrationData] = useState({
      name: '',
      email: '',
      password: '',
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };



  const handlePost = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/post', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((createdPost) => {
      console.log('New post created:', createdPost);
      //update the frontend to perform logic if the post is created
    })
    .catch((error) => {
      console.error('Error creating new post:', error);
      //handle error if the post creation fails
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Send login data to the backend for authentication
    Axios.post('http://localhost:3000/login', loginData)
      .then((response) => {
        console.log('Login success:', response.data);
        // Handle successful login
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Handle login error
        
      });
  };


  const handleRegistration = (e) => {
    e.preventDefault();
    // Send registration data to the backend for user registration
    Axios.post('http://localhost:3000/register', registrationData)
      .then((response) => {
        console.log('Registration success:', response.data);
        // Handle successful registration
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle registration error
      });
  };



  return (<Container>
    <FormWrap>
      <Icon to='/'>The FitTech Gym</Icon>
      <FormContent>

        <Form onSubmit={handlePost}>
          <FormLabel>Title</FormLabel>
          <FormInput type="text" name="title" onChange={handleInputChange} />
          <FormLabel>Content</FormLabel>
          <FormInput type="text" name="content" onChange={handleInputChange} />
          //incase of other form fields
          <FormButtonSearch type='submit'>Create Post</FormButtonSearch>
        </Form>

        <LinkEdit to='/memberships' > List all members</LinkEdit>
        //check whether to render view memberships or list all members
      </FormContent>
     
    </FormWrap>
         
  </Container>);
}



export default PostApi;
/* att */
