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
  
}


return (
 
  <Container>
  <FormWrap>
      <Icon to='/'>The FitTech Gym</Icon>
 
    <FormContent>

    <FormButtonSearch onClick={Alunos}>List all members:</FormButtonSearch>

{ isLoading ?  alunos.map((aluno) => {
 
        return <>
       <Form onSubmit={(e) => {
         e.preventDefault()
         PutApi(aluno.id)
       }}>


            <FormLabel>Name: </FormLabel>
            <FormEditInput>
            <FormInput type="text" name="nome"
            placeholder={aluno.nome}
            disabled={disabledNome}
            onChange={handleChange}

             />
            <EditButton onClick={() => setDisabledNome(!disabledNome)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
         
          <FormLabel>Social Number: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="cpf"
            placeholder={aluno.cpf}
            disabled={disabledCPF}
            onChange={handleChange}
            />
          <EditButton onClick={() => setDisabledCPF(!disabledCPF)}><BsPencilSquare /></EditButton>
            </FormEditInput>

         
          <FormLabel>Address: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="endereco"
            placeholder={aluno.endereco}
            disabled={disabledEndereco}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledEndereco(!disabledEndereco)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
          <FormLabel>State:  </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="cidade"
            placeholder={aluno.estado}
            disabled={disabledEstado}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledEstado(!disabledEstado)}><BsPencilSquare /></EditButton>
            </FormEditInput>
        
         
          <FormLabel>Phone: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="telefone"
            placeholder={aluno.telefone}
            disabled={disabledTelefone}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledTelefone(!disabledTelefone)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         
          <FormLabel>Email: </FormLabel>
          <FormEditInput>
          <FormInput
            type="email" name="email"
            placeholder={aluno.email}
            disabled={disabledEmail}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledEmail(!disabledEmail)}><BsPencilSquare /></EditButton>
            </FormEditInput>
        
       
          <FormLabel>Membership: </FormLabel>
          <FormEditInput>
          <FormInput
            type="text" name="plano"
            placeholder={aluno.plano}
            disabled={disabledPlano}
            onChange={handleChange}

            />
          <EditButton onClick={() => setDisabledPlano(!disabledPlano)}><BsPencilSquare /></EditButton>
            </FormEditInput>
         

          <FormButton type='button' className='buttonCont' onClick={()=>DelApi(aluno.id)}>Delete member</FormButton>
          <FormButton type='submit'>Reset member</FormButton>

          </Form>
          </>
      
      }) : <Loading /> 


}
      <Link to='/post'><FormButtonSearch>Register</FormButtonSearch></Link>
      </FormContent>
  </FormWrap>
  </Container>

  );
    
 
export default ReqApi;
/* att */
