import { useEffect, useState } from 'react';
import { firebaseAuth, createUser } from '../../utils/firebase-config'

import styled, {css} from 'styled-components';

import { BackgroundImage, Header } from '../../netflix-ui/Components';
import { Login } from './Login';
import { useForm } from '../hooks/useForm'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface PasswordProps {
  show? : {
    readonly showPass: boolean;
  }
}

const initialState = {
  email: '',
  password: '',
}



export const Signup = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { formState, onInputChange, onResetForm } = useForm( initialState );

  const handleSignIn = async () => {
    
    try {
      const { email, password } = formState;
      await createUser(firebaseAuth, email, password);
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
    <Container
      // showPassword={showPassword}
      show={({
        showPass: showPassword
      })} 
    > 
      <BackgroundImage />
    
      <div className="content">
        <Header login={ <Login /> } />
        <div className="body flex column a-center j-center" >
          <div className="text flex column">
            <h1>Unlimited movies, TV and more...</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
           <input 
             type="email" 
              placeholder="Email Adress" 
              name="email" 
              value={formState.email}
              onChange={onInputChange}
            />
            {
              showPassword && (
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  value={formState.password}
                  onChange={onInputChange}
                />
              )
            }
            
            {
              !showPassword && (
                <button onClick={ () => setShowPassword(true) } >Get started</button>
              )
            }
            
          </div>
          <button onClick={handleSignIn} >Sign Up</button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div<PasswordProps>`
  position: relative;
  ${props => props.show?.showPass && css`
    .form {
      grid-template-columns: 1fr 1fr;
    }
  `}
  .content {
    position: absolute;
    top 0;
    left: 0;
    background color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .body {
      gap: 1rem;
      .tex {
        gap: 1rem;
        text-align: center;
        font-size: 2 rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus{
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
         
          font-weigth: bolder;
          font-size: 1.05rem;
        }
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
`;

function createUserWithEmailAndPassword(email: string, password: string) {
  throw new Error('Function not implemented.');
}
