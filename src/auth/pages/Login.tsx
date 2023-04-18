import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth, signIn } from '../../utils/firebase-config'

import styled from 'styled-components';

import { BackgroundImage, Header } from '../../netflix-ui/Components';
import { useForm } from '../hooks/useForm';

const initialState = {
  email: '',
  password: '',
}

export const Login = () => {

  const { formState, onInputChange, onResetForm } = useForm( initialState );
  const navigate = useNavigate();

  const handleLogIn = async () => {
    
    try {
      const { email, password } = formState;
      await signIn(firebaseAuth, email, password);
      onResetForm()
    } catch (err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  });
  

  return (
    <Container> 
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input 
                type="email" 
                placeholder="Email Adress" 
                name="email" 
                value={formState.email}
                onChange={onInputChange}
              />
            
              <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={formState.password}
                onChange={onInputChange}
              />
              <button onClick={ handleLogIn } >Log In</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 30vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weigth: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

function createUserWithEmailAndPassword(email: string, password: string) {
  throw new Error('Function not implemented.');
}
