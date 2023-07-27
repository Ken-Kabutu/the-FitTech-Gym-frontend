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

    // // State for handling user registration
    // const [registrationData, setRegistrationData] = useState({
    //   name: '',
    //   email: '',
    //   password: '',
    // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };



  import axios from 'axios';

const handlePost = (e) => {
  e.preventDefault();
  const data = {}; // Replace this with the data you want to send in the POST request

  axios.post('http://localhost:9292/posts', data)
    .then((response) => {
      console.log('New post created:', response.data);
      // Update the frontend to perform logic if the post is created
    })
    .catch((error) => {
      console.error('Error creating new post:', error);
      // Handle error if the post creation fails
    });
};


  const handleLogin = (e) => {
    e.preventDefault();
    // Send login data to the backend for authentication
    Axios.post('http://localhost:9292/login', loginData)
      .then((response) => {
        console.log('Login success:', response.data);
        // Handle successful login
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Handle login error
        
      });
  };


  // const handleRegistration = (e) => {
  //   e.preventDefault();
  //   // Send registration data to the backend for user registration
  //   Axios.post('http://localhost:3000/register', registrationData)
  //     .then((response) => {
  //       console.log('Registration success:', response.data);
  //       // Handle successful registration
  //     })
  //     .catch((error) => {
  //       console.error('Registration failed:', error);
  //       // Handle registration error
  //     });
  // };



  return (<Container>
    <FormWrap>
      <Icon to='/'>The FitTech Gym</Icon>
      <FormContent>
        {/* Login Form */}
        <Form onSubmit={handleLogin}>
            <FormLabel>Email:</FormLabel>
            <FormInput
              type='email'
              name='email'
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <FormLabel>Password:</FormLabel>
            <FormInput
              type='password'
              name='password'
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <FormButton onClick={handleLogin}>Login</FormButton>
        </Form>

          {/* Registration Form
        <Form onSubmit={handleRegistration}>
            <FormLabel>Name:</FormLabel>
            <FormInput
              type='text'
              name='name'
              value={registrationData.name}
              onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
            />
            <FormLabel>Email:</FormLabel>
            <FormInput
              type='email'
              name='email'
              value={registrationData.email}
              onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
            />
            <FormLabel>Password:</FormLabel>
            <FormInput
              type='password'
              name='password'
              value={registrationData.password}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, password: e.target.value })
              }
            />
            <FormButton onClick={handleRegistration}>Register</FormButton>
        </Form> */}


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
