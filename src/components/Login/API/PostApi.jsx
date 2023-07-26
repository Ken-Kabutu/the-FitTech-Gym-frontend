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



 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value,
  });
 };



  const handleChange = ({ target: { value, name } }) => {

    // const handleOnChange = event => {
    setData({
      ...data, [name]: value,
    });
  }



  return (<Container>
    <FormWrap>
      <Icon to='/'>The FitTech Gym</Icon>
      <FormContent>

        <Form onSubmit={Alunos}>

          <FormLabel>Name</FormLabel>
          <FormInput type='text' onChange={handleChange} name='nome' />
          <FormLabel>CPF</FormLabel>
          <FormInput type='text' onChange={handleChange} name='cpf' />
          <FormLabel>Address</FormLabel>
          <FormInput type='text' onChange={handleChange} name='endereco' />
          <FormLabel>State</FormLabel>
          <FormInput type='text' onChange={handleChange} name='estado' />
          <FormLabel>Phone</FormLabel>
          <FormInput type='text' onChange={handleChange} name='telefone' />
          <FormLabel>Email</FormLabel>
          <FormInput type='email' onChange={handleChange} name='email' />
          <FormLabel>Membership</FormLabel>
          <FormInput type='text' onChange={handleChange} name='plano' />
          <FormButtonSearch>Save</FormButtonSearch>
        </Form>
        <LinkEdit to='/register' > List all members </LinkEdit>
      </FormContent>
     
    </FormWrap>
         
  </Container>);
}



export default PostApi;
/* att */
