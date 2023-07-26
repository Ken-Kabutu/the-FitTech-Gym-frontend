import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
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
  FormButtonSearch
} from './StyledComponents'
// import { Loading } from './Loading';
import { Loading } from './Loading'
import { BsPencilSquare } from "react-icons/bs";
 

function ReqApi() {
  const [memberships, setMemberships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchmemberships();
  }, []);
  const fetchmemberships = () => {
    Axios.get('http://localhost:9292/memberships')
    .then((response) => {
      setMemberships(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('failed to fetch memberships:', error);
      setIsLoading(false);
    });
  };

  //space for implementing other CRUD operations



return (
 
  <Container>
  <FormWrap>
      <Icon to='/'>The FitTech Gym</Icon>
 
    <FormContent>

      <FormButtonSearch onClick={fetchmemberships}>List all memberships:</FormButtonSearch>
      {isLoading ? (
        <Loading />
      ) : (
        memberships.map((membership) => (
          <Form key={membership.id}>
            <FormLabel>Plan Name:</FormLabel>
            <FormEditInput>
              <FormInput
                type="text"
                name="plan_name"
                value={membership.plan_name}
                onChange={(e) => handleEdit(membership.id)}
                disabled={/*set to true or false based on editing state*/}
              />
            </FormEditInput>  

          </Form>
        ))
      )
      

    </FormContent>
  </FormWrap>
  </Container>

  );
}
    
 
export default ReqApi;
/* att */
