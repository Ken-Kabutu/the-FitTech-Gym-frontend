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
  const [editingMembership, setEditingMembership] = useState(null);

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = () => {
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

  const handleEdit = (id) => {
    setEditingMembership(id);
  };


  const handleUpdate = (id) => {
    const membershipToUpdate = memberships.find((membership) => membership.id === id);
    Axios.put(`http://localhost:9292/memberships/${id}`, membershipToUpdate)
      .then(() => {
        setEditingMembership(null);
        fetchMemberships();
      })
      .catch((error) => {
        console.error('failed to update membership:', error);
      });
  };

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:9292/memberships/${id}`)
      .then(() => {
        fetchMemberships();
      })
      .catch((error) => {
        console.error('failed to delete membership:', error);
      });
  };



return (
 
  <Container>
  <FormWrap>
      <Icon to='/'>The FitTech Gym</Icon>
 
    <FormContent>

      <FormButtonSearch onClick={fetchMemberships}>List all memberships:</FormButtonSearch>
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
                disabled={editingMembership !== membership.id}
              />
              {editingMembership !== membership.id && (
              <EditButton onClick={() => handleEdit(membership.id)}>
                <BsPencilSquare />
              </EditButton>
              )}
            </FormEditInput> 

            //space to add other input fields

             <FormButton onClick={() => handleDelete(membership.id)}>Delete membership</FormButton>
             {editingMembership === membership.id && (
             <FormButton onClick={() => handleUpdate(membership.id)}>Reset membership</FormButton>
             )}
          </Form>
        ))
      )}
      <Link to="/post">
        <FormButtonSearch>Create New Post</FormButtonSearch>
      </Link>
    </FormContent>
  </FormWrap>
  </Container>

  );
}
    
 
export default ReqApi;
/* att */
